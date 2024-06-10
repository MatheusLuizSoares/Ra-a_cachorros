$(document).ready(function() {
  $('#mobile_btn').on("click", function() {
    $('#mobile_menu').toggleClass("active");
    $(this).find('i').toggleClass("fa-x")
  });

  $('#login-form').on('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    var username = $('#username').val();
    var password = $('#password').val();

    // Simulação de login
    if (username === 'admin' && password === 'password') {
      alert('Login bem-sucedido!');
      // Redirecionar para outra página ou fazer outra ação
      window.location.href = 'index.html'; // Redireciona para a página principal
    } else {
      alert('Usuário ou senha incorretos.');
    }
  });

  $('#register-form').on('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário
    var username = $('#new-username').val();
    var password = $('#new-password').val();
    var confirmPassword = $('#confirm-password').val();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Simulação de registro
    alert('Registro bem-sucedido!');
    // Redirecionar para a página de login ou fazer outra ação
    window.location.href = 'login.html';
  });
});
