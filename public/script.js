document.getElementById("loginForm").addEventListener("submit", login);
document.getElementById("registerForm").addEventListener("submit", register);

// Função de Login
function login(event) {
  event.preventDefault(); // Impede o reload da página

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Aqui chamamos o backend para validar o login
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("message").textContent = "Login bem-sucedido!";
      } else {
        document.getElementById("message").textContent =
          "Falha no login, tente novamente.";
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      document.getElementById("message").textContent =
        "Erro no sistema. Tente mais tarde.";
    });
}

// Função de Cadastro
function register(event) {
  event.preventDefault(); // Impede o reload da página

  const name = document.getElementById("name").value;
  const email = document.getElementById("emailRegister").value;
  const password = document.getElementById("passwordRegister").value;

  // Aqui chamamos o backend para criar um novo usuário
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        document.getElementById("registerMessage").textContent =
          "Conta criada!";
      } else {
        document.getElementById("registerMessage").textContent =
          "Falha na criação da conta, tente novamente.";
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
      document.getElementById("registerMessage").textContent =
        "Erro no sistema. Tente mais tarde.";
    });
}
