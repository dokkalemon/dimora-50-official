/* References HTML */
const navBar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");

let activeNavBar = false;

burger.addEventListener("click", function () {
  setActiveNavBar();
});

/* Function */
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
