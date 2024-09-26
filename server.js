const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

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
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Rotas para cadastro
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    res.json({ success: false });
  } else {
    users.push({ name, email, password });
    res.json({ success: true });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
