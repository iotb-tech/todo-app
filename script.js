// document.getElementById("text-btn").addEventListener("click", () =>{
// first alert to ask if the user is a new user or existing user
const yesButton = document.getElementById('btn-yes');
const noButton = document.getElementById('btn-no');
const getStarted = document.querySelector('button');
const dialogBox = document.querySelector('dialog');
getStarted.addEventListener('click', () => {
  dialogBox.showModal();
});
yesButton.addEventListener('click', () => {
  window.location.href = 'register.html';
});
noButton.addEventListener('click', () => {
  window.location.href = 'login.html';
});
