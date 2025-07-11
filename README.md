# 💪 Site da Personal Trainer Raquel Oliveira

Este é um monorepo com **front-end** em React + Vite e um **back-end** simples em Express, para promover os serviços de treino da profissional de Educação Física **Raquel Oliveira**. O site apresenta:

- Tipos de serviço  
- Benefícios  
- Depoimentos  
- Formulário de contato  
- Integração com WhatsApp  

---

## 🚀 Tecnologias utilizadas

- **React** – construção de interface  
- **Vite** – bundler moderno e rápido  
- **JavaScript (ES6+)** – lógica e componentes  
- **Express** – servidor Node.js para a API/backend  
- **Node.js & npm** – runtime e gerenciador de pacotes  
- **HTML5 & CSS3** – marcação e estilos  
- **ESLint** – padronização de código  

---

## 📁 Estrutura do projeto

projeto-de-extensao/
├── BackEnd/ # servidor Express
│ ├── Index.js # entrypoint do backend
│ ├── package.json
│ └── node_modules/
│
├── public/ # assets estáticos (favicon, logos etc.)
│ └── …
│
├── src/ # front-end React
│ ├── components/
│ │ ├── Apresentacao.jsx
│ │ ├── Beneficios.jsx
│ │ ├── Contato.jsx
│ │ ├── Depoimentos.jsx
│ │ ├── Formulario.jsx
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ ├── Inicio.jsx
│ │ └── TipoDeServico.jsx
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── index.html # template principal
├── package.json # dependências e scripts do front-end
├── vite.config.js # configuração do Vite
└── README.md # este arquivo

yaml
Copy
Edit

---

## 🖥️ Como rodar localmente

### 1. Pré-requisitos

- [Node.js ≥ 16](https://nodejs.org/)  
- npm (já vem com o Node.js)

---

### 2. Front-end (React + Vite)

```bash
# na raiz do projeto
git clone https://github.com/TeodoroSavite/ProjetoDeExtensaoUCB_Grupo6.git
cd ProjetoDeExtensaoUCB_Grupo6

npm install
npm run dev
Abra no navegador 👉 http://localhost:5173

3. Back-end (Express)
bash
Copy
Edit
# em outra janela/aba do terminal
cd ProjetoDeExtensaoUCB_Grupo6/BackEnd

npm install
node Index.js
O servidor Express ficará escutando (por padrão) em http://localhost:3000 (ou na porta que você configurar).