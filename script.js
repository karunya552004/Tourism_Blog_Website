// This is an example of how to add some basic functionality to the login form
// such as form validation and error handling. In a real-world application, you would likely use a JavaScript framework or library to handle this more robustly.

const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let errorMessage = "";

    if (usernameInput.value === "") {
        errorMessage = "Please enter a username";
    } else if (passwordInput.value === "") {
        errorMessage = "Please enter a password";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return;
    }

    // Simulate form submission by logging a message to the console
    console.log('Form submitted!');
});
