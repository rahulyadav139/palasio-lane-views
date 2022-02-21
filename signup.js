const btnSignup = document.querySelector('.btn-signup');

const modalBackDrop = document.querySelector('.modal-backdrop');
const btnDismiss = modalBackDrop.querySelector('.btn-dismiss');

btnSignup.addEventListener('click', () => {
  modalBackDrop.classList.remove('hidden-modal');
  modalBackDrop
    .querySelector('.modal-signup')
    .classList.add('modal-signup-show');
});
btnDismiss.addEventListener('click', () => {
  modalBackDrop.classList.add('hidden-modal');
  modalBackDrop
    .querySelector('.modal-signup')
    .classList.remove('modal-signup-show');
});
