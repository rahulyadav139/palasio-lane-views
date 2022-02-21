const btnLogin = document.querySelector('.btn-login');

const modalBackDrop = document.querySelector('.modal-backdrop');
const btnDismiss = modalBackDrop.querySelector('.btn-dismiss');

btnLogin.addEventListener('click', () => {
  modalBackDrop.classList.remove('hidden-modal');
  modalBackDrop.querySelector('.modal-login').classList.add('modal-login-show');
});
btnDismiss.addEventListener('click', () => {
  modalBackDrop.classList.add('hidden-modal');
  modalBackDrop
    .querySelector('.modal-login')
    .classList.remove('modal-login-show');
});
