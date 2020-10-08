const navIcon = document.querySelector('#nav-icon');
const navList = document.querySelector('#nav-list');

let navIsOpen = false;

const handleNavClick = (e) => {
  !navIsOpen
    ? (navList.style.display = 'block')
    : (navList.style.display = 'none');

  navIsOpen = !navIsOpen;
};

navIcon.addEventListener('click', handleNavClick);

const testd = document.querySelector('#test-div');

let inWid = window.innerWidth;
let inH = window.innerHeight;

testd.innerHTML = `<p> ${inWid} x ${inH} <p>`;
