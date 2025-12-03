const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5500;

let users = []; // Simples armazenamento em memória para testes

// Middleware
app.use(bodyParser.json());
app.use(express.static("public")); // Serve arquivos estáticos, como HTML e CSS

// Rotas para login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.json({ success: true, message: "Login realizado com sucesso!" });
  } else {
    res
      .status(400)
      .json({ success: false, message: "Email ou senha incorretos." });
  }
});

// Rotas para cadastro
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    res.status(400).json({ success: false, message: "Email já cadastrado!" });
  }

  // Verifica se os dados estão completos
  if (!name || !email || !password) {
    res
      .status(400)
      .json({ success: false, message: "Preencha todos os campos!" });
  }

  users.push({ name, email, password });
  res.status(201).json({ success: true, message: "Conta criada com sucesso!" });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
