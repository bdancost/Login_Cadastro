# CRUD — Sistema de Login simples (pt-BR)

🛡️ Ferramentas usadas  
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Aplicação de exemplo com backend em Express e frontend estático para demonstrar um fluxo básico de cadastro e login. Contém também um arquivo de exemplo com operações CRUD simples.

Arquivos principais

- [server.js](server.js) — servidor Express que expõe as rotas de API (`POST /login`, `POST /register`) e serve a pasta estática `public`.
  - Rotas implementadas: [`app.post('/login')`](server.js), [`app.post('/register')`](server.js)
  - Armazenamento em memória: variável [`users`](server.js)
- [public/index.html](public/index.html) — interface web de login e cadastro.
- [public/script.js](public/script.js) — lógica do frontend; funções de envio:
  - Funções: [`login`](public/script.js), [`register`](public/script.js)
- [public/style.css](public/style.css) — estilos da interface.
- [crud.js](crud.js) — exemplos de operações CRUD em memória (funções: [`criaPost`](crud.js), [`pegaPost`](crud.js), [`atualizarContentDoPost`](crud.js), [`apagaPost`](crud.js)).
- [package.json](package.json) — dependências e scripts.

Pré-requisitos

- Node.js (versão 14+ recomendada)
- npm

Como rodar

1. Na raiz do projeto, instale as dependências:
   npm install
2. Inicie a aplicação:
   npm start
3. Abra no navegador:
   http://localhost:5500

Observações importantes

- O backend utiliza armazenamento em memória (a variável [`users`](server.js)); ao reiniciar o servidor, todos os usuários são perdidos. Usar um banco de dados real para produção.
- O frontend faz requisições Fetch para as rotas definidas em [server.js](server.js) via [`public/script.js`](public/script.js).
- O arquivo [crud.js](crud.js) contém exemplos didáticos de operações CRUD fora do servidor (apenas para estudo).

Estrutura do projeto

- .gitignore
- [package.json](package.json)
- [server.js](server.js)
- [crud.js](crud.js)
- public/
  - [index.html](public/index.html)
  - [script.js](public/script.js)
  - [style.css](public/style.css)

Contribuições

- Para melhorar: substituir o armazenamento em memória por um banco (ex.: PostgreSQL), adicionar validação e hashing de senhas, tratamentos de erros e testes automatizados.
