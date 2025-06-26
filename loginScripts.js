const errorMessage = document.getElementById("login-error-message");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  const username = document.getElementById("user-name").value.trim();
  const password = document.getElementById("password-input").value.trim();

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    errorMessage.textContent = "Login successful!";
    errorMessage.classList.add("text-green-500");
  } else {
    errorMessage.textContent = "Invalid username or password.";
    errorMessage.classList.add("text-red-500");
  }
});
