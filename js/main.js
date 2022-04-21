/* References HTML */
const navBar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const slide = document.querySelectorAll(".slide");

let activeNavBar = false;
let activeSlide = 0;

burger.addEventListener("click", function () {
  setActiveNavBar();
});

/* Function */
//MENU MOBILE
function setActiveNavBar() {
  if (activeNavBar === false) {
    activeNavBar = true;
  } else {
    activeNavBar = false;
  }
  showNavBar();
}

function showNavBar() {
  if (activeNavBar === true) {
    navBar.classList.add("active");
    burger.classList.add("active");
  } else {
    navBar.classList.remove("active");
    burger.classList.remove("active");
  }
}

//CAROUSEL
function increaseActiveSlide() {
  activeSlide++;
  if (activeSlide > 2) {
    activeSlide = 0;
  }
  selectSlide();
}

function decreaseActiveSlide() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = 2;
  }
  selectSlide();
}

function selectSlide() {
  if (activeSlide === 1) {
    slide[2].classList.add("active");
  } else if (activeSlide === 2) {
    slide[1].classList.add("active");
  } else if (activeSlide === 0) {
    slide[2].classList.remove("active");
    slide[1].classList.remove("active");
  }
}
