// const slides = document.querySelectorAll('.slide');
// const btnLeft = document.querySelector('.btn-left');
// const btnRight = document.querySelector('.btn-right');

// let slide = 0;

// const nextSlide = () => {
//   slides.forEach(el => el.classList.add('hidden'));

//   if (slide === 3) {
//     slide = 0;
//   }

//   slides[slide].classList.remove('hidden');

//   slide++;
// };

// const prevSlide = () => {
//   slides.forEach(el => el.classList.add('hidden'));

//   if (slide === 0) {
//     slide = 3;
//   }

//   slides[slide].classList.remove('hidden');

//   slide--;
// };

// const timer = setInterval(() => {
//   slideShow();
// }, 5000);

// timer();

// btnLeft.addEventListener('click', () => {
//   //   clearInterval(timer);
//   prevSlide();
//   //   setInterval(timer);
// });

// btnRight.addEventListener('click', () => {
//   //   clearInterval(timer);
//   nextSlide();
//   //   setInterval(timer);
// });

// dropdown

// login modal
const btnLogin = document.querySelector('.btn-login');
const modalBackDrop = document.querySelector('.modal-backdrop');
const btnDismiss = modalBackDrop.querySelector('.btn-dismiss');

btnLogin.addEventListener('click', () => {
  modalBackDrop.classList.remove('hidden');
});
btnDismiss.addEventListener('click', () => {
  modalBackDrop.classList.add('hidden');
});
