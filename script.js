function login() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    // Perform a check for valid credentials
    if (username === 'admin' && password === 'admin') {
        // Redirect to the admin panel if the credentials are correct
        window.location.href = 'admin/admin.html';
    } else {
        // Display an error message if the credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
});
}
