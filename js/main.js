/* Data */
const apartment = [
  {
    path: "./img/carousel/1.jpg",
  },
  {
    path: "./img/carousel/2.jpg",
  },
  {
    path: "./img/carousel/3.jpg",
  },
  {
    path: "./img/carousel/1.jpg",
  },
  {
    path: "./img/carousel/2.jpg",
  },
  {
    path: "./img/carousel/3.jpg",
  },
  {
    path: "./img/carousel/1.jpg",
  },
  {
    path: "./img/carousel/2.jpg",
  },
  {
    path: "./img/carousel/3.jpg",
  },
  {
    path: "./img/carousel/2.jpg",
  },
];

/* References HTML */
const navBar = document.querySelector(".navbar");
const burger = document.querySelector(".burger");
const slide = document.querySelectorAll(".slide");
const colazioni = document.getElementById("colazioni");
const supermarket = document.getElementById("supermarket");
const gallery = document.querySelector(".gallery");
const bigPhotoContainer = document.querySelector(".big-photo-container");
const previewScroll = document.querySelector(".preview-scroll");

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
  const slide = document.querySelectorAll(".slide");
  if (activeSlide === 0) {
    slide[1].classList.add("active");
    slide[2].classList.add("active");
  } else if (activeSlide === 1) {
    slide[1].classList.remove("active");
  } else if (activeSlide === 2) {
    slide[2].classList.remove("active");
  }
}

function constolSlideHandler(num) {
  const control = document.querySelectorAll(".control");

  activeSlide = num;
  for (let i = 0; i < control.length; i++) {
    if (i === num) {
      control[i].classList.add("active");
    } else {
      control[i].classList.remove("active");
    }
  }
  selectSlide();
}

function showLabel(checkbox, ref) {
  checkbox.checked
    ? ref.classList.add("active")
    : ref.classList.remove("active");
}

function createStructure(array) {
  gallery.classList.add("active");
  renderSlide(array);
}

let galleryActiveSlide = 0;
function renderSlide(array) {
  array.forEach((el, index) => {
    /* Slide */
    const gallerySlide = document.createElement("div");
    gallerySlide.classList.add("gallery-slide");
    if (index === galleryActiveSlide) {
      gallerySlide.classList.add("active");
    }
    bigPhotoContainer.append(gallerySlide);

    const image = document.createElement("div");
    image.classList.add("image");
    gallerySlide.append(image);

    const img = document.createElement("img");
    img.setAttribute("src", `${el.path}`);
    image.append(img);

    /* Preview */
    const slidePreview = document.createElement("div");
    slidePreview.classList.add("slide-preview");
    slidePreview.addEventListener("click", () => {
      controlSlide(index);
    });

    if (index === galleryActiveSlide) {
      slidePreview.classList.add("active");
    }

    previewScroll.append(slidePreview);

    const imgPreview = document.createElement("img");
    imgPreview.setAttribute("src", `${el.path}`);
    slidePreview.append(imgPreview);
  });
}

function galleryIncreaseActiveSlide() {
  galleryActiveSlide++;
  if (galleryActiveSlide > 9) {
    galleryActiveSlide = 0;
  }
  changeSlide();
  changePreview();
}

function galleryDecreaseActiveSlide() {
  galleryActiveSlide--;
  if (galleryActiveSlide < 0) {
    galleryActiveSlide = 9;
  }
  changeSlide();
  changePreview();
}

function changeSlide() {
  const gallerySlide = document.querySelectorAll(".gallery-slide");

  for (let i = 0; i < gallerySlide.length; i++) {
    if (i === galleryActiveSlide) {
      gallerySlide[i].classList.add("active");
    } else {
      gallerySlide[i].classList.remove("active");
    }
  }
}

function changePreview() {
  const slidePreview = document.querySelectorAll(".slide-preview");

  for (let i = 0; i < slidePreview.length; i++) {
    if (i === galleryActiveSlide) {
      slidePreview[i].classList.add("active");
    } else {
      slidePreview[i].classList.remove("active");
    }
  }
}

function controlSlide(index) {
  const slidePreview = document.querySelectorAll(".slide-preview");

  galleryActiveSlide = index;
  console.log(galleryActiveSlide);
  changePreview();
  changeSlide();
}

function destroyStructure() {
  gallery.classList.remove("active");
  bigPhotoContainer.innerHTML = "";
  previewScroll.innerHTML = "";
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
