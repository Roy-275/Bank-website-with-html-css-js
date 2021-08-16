document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // apply redirecting condition
    if (userEmail == 'name.123@phiju.edu.bd' && userPassword == 'iampublichealthspecialist') {
        window.location.href = 'welcome.html';
    }
})