const registerButton = document.getElementById('register-button');
const registerDialog = document.getElementById('register-dialog');
const dialogText = document.getElementById('register-text');
const closeDialogButton = document.querySelector('#register-dialog button');
const passwordErrorMssg = document.getElementById('error-message');

registerButton.addEventListener('click', () => {
  const nameInput = document.getElementById('name-input').value.trim();
  const passwordInput = document.getElementById('password-input').value.trim();
  const confirmPasswordInput = document.getElementById('confirm-password-input').value.trim();

  if (!nameInput || !passwordInput || !confirmPasswordInput) {
    passwordErrorMssg.textContent = 'All fields are required!';
    return;
  }

  if (passwordInput.length < 8) {
    passwordErrorMssg.textContent = "Password can't be less than 8 characters.";
    return;
  }

  if (passwordInput !== confirmPasswordInput) {
    passwordErrorMssg.textContent = 'Passwords do not match!';
    return;
  }

  passwordErrorMssg.textContent = ''; // Clear errors
  localStorage.setItem('username', nameInput);
  localStorage.setItem('password', passwordInput);

  dialogText.innerHTML = `✅ <br/> Welcome, ${nameInput}! Registration successful.`;
  document.getElementById('input-form').reset();
  registerDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
  registerDialog.close();
  window.location.href = 'todo-list.html';
});
