const up = document.querySelector('#up');
const down = document.querySelector('#down');
const screens = Array.from(document.querySelectorAll('.screen'));

let currentScreen = 0;

const handleSlide = (e) => {
  // evaluate button press and change screen via currentScreen
  e.target.id === 'up'
    ? currentScreen < screens.length - 1
      ? currentScreen++
      : (currentScreen = 0)
    : currentScreen > 0
    ? currentScreen--
    : (currentScreen = screens.length - 1);

  // page transition with opacity
  screens.forEach((e) => {
    e.style.opacity = 0;
  });

  screens[currentScreen].style.opacity = 1;
};

[up, down].forEach((e) => {
  e.addEventListener('click', handleSlide);
});

//  initialise first screen to be visible
window.addEventListener('load', () => {
  screens[currentScreen].style.opacity = 1;
});
