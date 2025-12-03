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

# Sistema de Login para Cadastro de Clientes - Site de Viagens 🌍✈️

## Descrição 📄

Este projeto é um sistema de login e cadastro de clientes desenvolvido com **Node.js**, **HTML**, **CSS**, **JavaScript** e **PostgreSQL**. Ele foi criado como parte de um exercício para treinar lógica de programação e funcionalidades CRUD (Create, Read, Update, Delete). O sistema permite que usuários se cadastrem, façam login e gerenciem seus dados, sendo ideal para um site de viagens.

## Funcionalidades 🚀

- **Cadastro de usuários:** Permite que novos usuários se cadastrem fornecendo nome, email e senha.
- **Login de usuários:** Os usuários cadastrados podem fazer login com suas credenciais.
- **Persistência de dados:** Os dados dos usuários são armazenados em um banco de dados PostgreSQL.
- **Validação de formulários:** Verificação de campos obrigatórios e formato de email.

## Tecnologias Utilizadas 🛠️

- **Node.js**: Servidor backend e API para gerenciar as rotas.
- **Express**: Framework para Node.js para simplificar a criação das rotas e requisições HTTP.
- **PostgreSQL**: Banco de dados relacional para armazenamento de informações dos usuários.
- **HTML5, CSS3, JavaScript**: Estrutura, estilo e funcionalidades do frontend.
- **dotenv**: Gerenciamento de variáveis de ambiente, como as credenciais do banco de dados.

## Instalação 💻

Siga os passos abaixo para rodar o projeto localmente:

### Pré-requisitos:

- Node.js (v12+)
- PostgreSQL (v12+)
- Git

### Passos de instalação:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Entre no diretório do projeto:**

   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Configuração do Banco de Dados PostgreSQL:**

   - Certifique-se de que o PostgreSQL está rodando em sua máquina.
   - Crie um banco de dados:
     ```sql
     CREATE DATABASE sistema_login;
     ```
   - No arquivo `.env`, configure suas variáveis de ambiente para conectar ao banco de dados:
     ```
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=seu-usuario
     DB_PASSWORD=sua-senha
     DB_NAME=sistema_login
     ```

5. **Execute o script para criar a tabela de usuários (opcional):**

   ```sql
   CREATE TABLE usuarios (
       id SERIAL PRIMARY KEY,
       nome VARCHAR(100),
       email VARCHAR(100) UNIQUE,
       senha VARCHAR(100)
   );
   ```

6. **Inicie o servidor:**

   ```bash
   npm start
   ```

7. **Acesse no navegador:**
   O sistema estará disponível em `http://localhost:3000`.

## Uso do Sistema 👨‍💻

1. **Cadastro de usuário:**

   - Acesse a página de cadastro e insira seu nome, email e senha.
   - Após o cadastro, uma mensagem de confirmação será exibida.

2. **Login:**
   - Use o email e a senha cadastrados para fazer login no sistema.

## Estrutura do Projeto 📂

O projeto segue a seguinte estrutura de diretórios:

```
/public
  /css          -> Arquivos de estilo (CSS)
  /js           -> Scripts JavaScript (Frontend)
  /img          -> Imagens usadas no site (opcional)
/views          -> Templates HTML do sistema
server.js       -> Arquivo principal do servidor Node.js
.env            -> Arquivo de variáveis de ambiente (não incluído no Git)
package.json    -> Arquivo de configuração do Node.js
README.md       -> Arquivo de documentação do projeto
```

## Dependências 📦

- **Express**: ^4.18.0
- **pg**: ^8.7.0 (PostgreSQL client)
- **dotenv**: ^10.0.0

## Contribuição 🤝

Contribuições são bem-vindas! Se você quiser melhorar o sistema, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

### Explicação dos Componentes do README.md:

- **Descrição:** Um breve resumo do que é o projeto.
- **Funcionalidades:** Lista das principais funcionalidades do sistema.
- **Tecnologias Utilizadas:** Menciona as ferramentas e linguagens usadas no projeto.
- **Instalação:** Instruções passo a passo para clonar o repositório, instalar dependências e configurar o banco de dados.
- **Uso do Sistema:** Explica como usar o sistema, com foco nas principais operações (cadastro e login).
- **Estrutura do Projeto:** Exibe a organização dos arquivos e diretórios.
- **Dependências:** Lista as bibliotecas utilizadas.
- **Contribuição:** Convida outros desenvolvedores a contribuir com o projeto.
- **Licença:** Indica a licença sob a qual o projeto está registrado.
- **Autor:** Créditos para você.
