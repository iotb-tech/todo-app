const errorMessage = document.getElementById("login-error-message");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  const username = document.getElementById("user-name").value.trim();
  const password = document.getElementById("password-input").value.trim();

  if (!username || !password) {
    errorMessage.textContent = "All fields are necessary!";
  }

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    errorMessage.textContent = "Login successful!";
    errorMessage.style.color = "green";
  } else {
    errorMessage.textContent = "Invalid username or password.";
    errorMessage.style.color = "red";
  }
});
