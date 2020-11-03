const carousel = document.querySelector('.carousel');
const slideImgs = document.querySelectorAll('.carousel img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = slideImgs[0].clientWidth;

carousel.style.transform = 'translateX(' + -size * counter + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter >= slideImgs.length - 1) return;
  carousel.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carousel.style.transform = 'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carousel.style.transition = `transform 0.4s ease-in-out`;
  counter--;
  carousel.style.transform = 'translateX(' + -size * counter + 'px)';
});

carousel.addEventListener('transitionend', () => {
  if (slideImgs[counter].id === 'last') {
    carousel.style.transition = 'none';
    counter = slideImgs.length - 2;
    carousel.style.transform = 'translateX(' + -size * counter + 'px)';
  }
  if (slideImgs[counter].id === 'first') {
    carousel.style.transition = 'none';
    counter = slideImgs.length - counter;
    carousel.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});
