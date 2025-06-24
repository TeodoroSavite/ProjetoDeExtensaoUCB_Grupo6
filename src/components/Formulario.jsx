import React, { useState } from 'react';
import axios from 'axios';
import './Formulario.css';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [servico, setServico] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [estrelas, setEstrelas] = useState(5);


const handleSubmit = async e => {
  e.preventDefault();

  // validation omitted for brevity…

  try {
    if (servico === 'depoimentos') {
      // save testimonial
      await axios.post('http://localhost:3001/depoimento', {
        nome,
        email,
        mensagem,
        estrelas
      });
      alert('Depoimento enviado e salvo!');
    } else {
      // send contact email
      await axios.post('http://localhost:3001/contato', {
        nome,
        email,
        telefone,
        servico,
        mensagem
      });
      alert('Mensagem enviada com sucesso!');
    }

    // reset form
    setNome(''); setEmail(''); setTelefone(''); setServico(''); setMensagem('');setEstrelas(5);

  } catch (err) {
    console.error(err);
    alert('Erro ao enviar. Tente novamente.');
  }
};

  return (
    <div id="Formulario">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          value={nome}
          onChange={e => setNome(e.target.value)}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          placeholder="(00) 00000-0000"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

<fieldset>
  <legend>Tipo de Serviço que você procura:</legend>

  <label className="opcao-radio">
    <span>Aulas Online</span>
    <input
      type="radio"
      name="servico"
      value="Aulas Online"
      required
      checked={servico === 'Aulas Online'}
      onChange={e => setServico(e.target.value)}
    />
  </label>

  <label className="opcao-radio">
    <span>Aulas Presenciais</span>
    <input
      type="radio"
      name="servico"
      value="Aulas Presenciais"
      checked={servico === 'Aulas Presenciais'}
      onChange={e => setServico(e.target.value)}
    />
  </label>

  <label className="opcao-radio">
    <span>Planilhas Personalizadas</span>
    <input
      type="radio"
      name="servico"
      value="Planilhas Personalizadas"
      checked={servico === 'Planilhas Personalizadas'}
      onChange={e => setServico(e.target.value)}
    />
  </label>

  <label className="opcao-radio">
    <span>Depoimentos</span>
    <input
      type="radio"
      name="servico"
      value="depoimentos"
      checked={servico === 'depoimentos'}
      onChange={e => setServico(e.target.value)}
    />
  </label>
</fieldset>


        {/* NEW text area for the message */}
        <label htmlFor="mensagem">
          {servico === 'depoimentos'
            ? 'Escreva seu depoimento:'
            : 'Sua mensagem:'}
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          required
          value={mensagem}
          onChange={e => setMensagem(e.target.value)}
        />
        
        
        {servico === 'depoimentos' && (
  <div className="avaliacao-estrelas">
    <label>Avaliação:</label>
    {[1, 2, 3, 4, 5].map(n => (
      <span
        key={n}
        style={{
          cursor: 'pointer',
          color: n <= estrelas ? '#ffd700' : '#ccc',
          fontSize: '1.5rem'
        }}
        onClick={() => setEstrelas(n)}
      >
        ★
      </span>
    ))}
  </div>
)}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
