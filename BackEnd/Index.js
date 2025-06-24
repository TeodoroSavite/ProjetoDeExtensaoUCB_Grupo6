// index.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());            
app.use(express.json());    

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',       // <-- your MySQL root password
  database: 'projeto_extensao'
});

// Test MySQL connection
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Back-End está funcionando!');
});

// ─── Usuários ───────────────────────────────────────────────────────

// GET all users
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar usuários:', err);
      return res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
    res.json(results);
  });
});

// POST a new user
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e email são obrigatórios.' });
  }

  const query = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
  db.query(query, [nome, email], (err, results) => {
    if (err) {
      console.error('Erro ao inserir usuário:', err);
      return res.status(500).json({ error: 'Erro ao inserir usuário' });
    }
    res.status(201).json({ message: 'Usuário criado com sucesso!', id: results.insertId });
  });
});

// ─── Depoimentos ────────────────────────────────────────────────────

// GET all depoimentos
app.get('/depoimento', (req, res) => {
  const sql = `
    SELECT id, nome, mensagem, estrelas,
           DATE_FORMAT(data, '%d/%m/%Y %H:%i') AS data
    FROM depoimentos
    ORDER BY data DESC`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Erro ao buscar depoimentos:', err);
      return res.status(500).json({ error: 'Erro ao buscar depoimentos.' });
    }
    res.json(results);
  });
});

// POST a new depoimento: send email + save to DB
app.post('/depoimento', async (req, res) => {
  const { nome, email, mensagem, estrelas } = req.body;
  if (!nome || !email || !mensagem || !estrelas) {
    return res.status(400).json({ error: 'Nome, email, mensagem e estrelas são obrigatórios.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'projetodeextensaogrupo6@gmail.com',
        pass: 'komo nltv rfme huho'
      }
    });

    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: 'teosavitebr@gmail.com',  //COLOCAR O EMAIL DO DONO DO SITE
      subject: 'Novo Depoimento Recebido',
      text: `Nome: ${nome}\nEmail: ${email}\nEstrelas: ${estrelas}\n\nMensagem:\n${mensagem}`
    });

    const insertSql = 'INSERT INTO depoimentos (nome, mensagem, estrelas) VALUES (?, ?, ?)';
    db.query(insertSql, [nome, mensagem, estrelas], (err) => {
      if (err) {
        console.error('Erro ao salvar depoimento:', err);
        return res.status(500).json({ error: 'Depoimento não pôde ser salvo.' });
      }
      res.status(201).json({ success: true, message: 'Depoimento enviado e salvo!' });
    });

  } catch (err) {
    console.error('Erro no processamento do depoimento:', err);
    res.status(500).json({ error: 'Erro ao processar depoimento.' });
  }
});


// ─── Contato ────────────────────────────────────────────────────────
// POST contact submissions: send email with subject = service, include message
app.post('/contato', async (req, res) => {
  const { nome, email, telefone, servico, mensagem } = req.body;
  if (!nome || !email || !telefone || !servico || !mensagem) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'projetodeextensaogrupo6@gmail.com', // site owner's email
        pass: 'komo nltv rfme huho'    // app password
      }
    });

    await transporter.sendMail({
      from: `"${nome}" <${email}>`,
      to: 'teosavitebr@gmail.com',
      subject: servico,            // use selected service as subject
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`
    });

    res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (err) {
    console.error('Erro no envio do contato:', err);
    res.status(500).json({ error: 'Erro ao enviar mensagem de contato.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
