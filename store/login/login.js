const form = document.querySelector(".login__form");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const storedUsuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (email === storedUsuario.email && password === storedUsuario.password) {
      window.location.href = "home.html";
    } else {
      alert("E-mail ou senha inválidos!");
    }
  });