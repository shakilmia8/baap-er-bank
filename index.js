document.getElementById('login-button').addEventListener('click', function () {
    const inputText = document.getElementById('input-text');
    const inputTextField = inputText.value;
    const inputPassword = document.getElementById('input-password');
    const inputPasswordField = inputPassword.value;
    if (inputTextField == 'sontan@baap.com' && inputPasswordField == '1') {
        window.location.href = 'bank.html'
    }
});