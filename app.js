const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let slide = 0;

const nextSlide = () => {
  slides.forEach(el => el.classList.add('hidden'));

  if (slide === 3) {
    slide = 0;
  }

  slides[slide].classList.remove('hidden');

  slide++;
};

const prevSlide = () => {
  slides.forEach(el => el.classList.add('hidden'));

  if (slide === 0) {
    slide = 3;
  }

  slides[slide].classList.remove('hidden');

  slide--;
};

const timer = setInterval(() => {
  slideShow();
}, 5000);

timer();

btnLeft.addEventListener('click', () => {
  //   clearInterval(timer);
  prevSlide();
  //   setInterval(timer);
});

btnRight.addEventListener('click', () => {
  //   clearInterval(timer);
  nextSlide();
  //   setInterval(timer);
});
