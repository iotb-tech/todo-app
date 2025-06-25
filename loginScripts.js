const errorMessage = document.getElementById("login-error-message");
const loginDialog = document.getElementById("login-dialog");
const loginDialogText = document.getElementById("login-text");
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("passwordInput").value.trim();
  //   const storedUsername = localStorage.getItem("username");
  //   const storedpassword = localStorage.getItem("password");

  //   if (username === storedUsername && password === storedpassword) {
  //     location.href = "#";
  //   } else {
  //     errorMessage.textContent =
  //       "Invalid username or password, Please try again.";
  //   }
});
