const errorMessage = document.getElementById("login-error-message");
const loginButton = document.getElementById("login-button");
const passwordToggler = document.getElementById("toggle-password-visibility");
const passwordInput = document.getElementById("password-input");

passwordToggler.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggler.textContent = "👁️";
  } else {
    passwordInput.type = "password";
    passwordToggler.textContent = "👁️‍🗨️";
  }
});

loginButton.addEventListener("click", () => {
  const username = document.getElementById("user-name").value.trim();
  const password = document.getElementById("password-input").value.trim();

  if (!username || !password) {
    errorMessage.textContent = "All fields are necessary!";
    return;
  }

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    window.location.assign("todo-list.html");
  } else {
    errorMessage.textContent = "Invalid username or password.";
    errorMessage.style.color = "red";
  }
  document.getElementById("login-input-form").reset();
});
