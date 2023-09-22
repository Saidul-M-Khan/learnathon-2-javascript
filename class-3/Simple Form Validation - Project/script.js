document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const messageDiv = document.getElementById("message");
    const loginInfo = {username: "saidul", password: "1234"}

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value;
        const password = passwordInput.value;

        // You can implement your custom validation logic here
        if (username === loginInfo['username'] && password === loginInfo['password']) {
            messageDiv.textContent = "Login successful!";
            messageDiv.style.color = "green";
        } else {
            messageDiv.textContent = "Invalid username or password. Please try again.";
            messageDiv.style.color = "red";
        }
    });
});