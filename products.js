// filter

const btnFilter = document.querySelector('.btn-filter');
const listingSection = document.querySelector('.listing-section');
const btnReset = document.querySelector('.btn-reset');
const filterSection = document.querySelector('.filter-section');

btnFilter.addEventListener('click', () => {
  filterSection.style.display = 'block';
  setTimeout(() => {
    filterSection.classList.add('filter-section-show');
    listingSection.style.display = 'none';
  }, 10);
});
btnReset.addEventListener('click', () => {
  filterSection.classList.remove('filter-section-show');
  setTimeout(() => {
    filterSection.style.display = 'none';
    listingSection.style.display = 'block';
  }, 500);
});
