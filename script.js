

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Aqui você pode adicionar uma chamada para a API de login
    window.location.href = "https://washappbeta.github.io/servicos.html"
  } else {
    alert('Por favor, preencha os campos!');
  }
});


document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('As senhas não coincidem!');
    return;
  }

  if (name && email && password && confirmPassword) {
    // Aqui você pode adicionar a chamada para a API de cadastro
    alert(`Cadastro realizado com sucesso! \nNome: ${name}\nEmail: ${email}`);
  } else {
    alert('Por favor, preencha todos os campos!');
  }
});
