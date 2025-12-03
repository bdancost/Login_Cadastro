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
