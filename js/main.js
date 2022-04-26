/* References HTML */
const navBar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const slide = document.querySelectorAll(".slide");
const colazioni = document.getElementById("colazioni");
const supermarket = document.getElementById("supermarket");

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

function showLabel(checkbox, ref) {
  checkbox.checked
    ? ref.classList.add("active")
    : ref.classList.remove("active");
}

/* DateRangePicker */

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

console.log(mm + "/" + dd + "/" + yyyy);
$(function () {
  $('input[name="datefilter"]').daterangepicker({
    opens: "center",
    autoUpdateInput: false,
    autoApply: true,
    minYear: 2022,
    minDate: dd + "/" + mm + "/" + yyyy,

    format: "MMMM D, YYYY",
    locale: {
      format: "MMMM D, YYYY",
      daysOfWeek: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
      monthNames: [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre",
      ],
    },
  });

  $('input[name="datefilter"]').on(
    "apply.daterangepicker",
    function (ev, picker) {
      $(this).val(
        picker.startDate.format("DD/MM/YYYY") +
          " - " +
          picker.endDate.format("DD/MM/YYYY")
      );
    }
  );

  $('input[name="datefilter"]').on(
    "cancel.daterangepicker",
    function (ev, picker) {
      $(this).val("");
    }
  );
});
