const btnScrollTop = document.querySelector('.btn-scroll-top');
const themeToggleLabel = document.querySelector('.theme-toggle');
const sunIcon = themeToggleLabel.querySelector('.fa-sun');
const moonIcon = themeToggleLabel.querySelector('.fa-moon');

btnScrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

//toggle theme

const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
  if (checkbox.hasAttribute('checked')) {
    document.body.classList.remove('dark-theme');
    checkbox.removeAttribute('checked');
    localStorage.setItem('theme', 'light');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    document.body.classList.add('dark-theme');
    checkbox.setAttribute('checked', '');
    localStorage.setItem('theme', 'dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  }
});

window.addEventListener('load', () => {
  const theme = localStorage.getItem('theme');

  if (theme) {
    if (theme === 'dark') {
      checkbox.setAttribute('checked', '');
      document.body.classList.add('dark-theme');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  }
});

// access mobile navigation

const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const hamburgerBackdrop = document.querySelector('.hamburger-menu__backdrop');

hamburgerIcon.addEventListener('click', () => {
  hamburgerBackdrop.classList.remove('hidden');
  hamburgerMenu.classList.remove('hamburger-menu--hide');
  document.querySelector('body').classList.add('overflow-hidden');
});
hamburgerBackdrop.addEventListener('click', () => {
  hamburgerBackdrop.classList.add('hidden');
  hamburgerMenu.classList.add('hamburger-menu--hide');
  document.querySelector('body').classList.remove('overflow-hidden');
});
