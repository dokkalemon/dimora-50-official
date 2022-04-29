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
  console.log(activeSlide);
  selectSlide();
  constolSlideHandler(activeSlide);
}

function decreaseActiveSlide() {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = 2;
  }
  console.log(activeSlide);
  selectSlide();
  constolSlideHandler(activeSlide);
}

function selectSlide() {
  const slide = document.querySelectorAll(".slide");
  for (let i = 0; i < slide.length; i++) {
    if (i === activeSlide) {
      slide[i].classList.add("active");
    } else {
      slide[i].classList.remove("active");
    }
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
});

/* COOKIE */

//<![CDATA[
(function (window) {
  if (!!window.cookieChoices) {
    return window.cookieChoices;
  }
  var document = window.document;
  var supportsTextContent = "textContent" in document.body;
  var cookieChoices = (function () {
    var cookieName = "displayCookieConsent";
    var cookieConsentId = "cookieChoiceInfo";
    var dismissLinkId = "cookieChoiceDismiss";
    function _createHeaderElement(cookieText, dismissText, linkText, linkHref) {
      var butterBarStyles =
        "position:fixed;width:100%; font-size: 20px;height: 9%; display: flex; align-items: center; justify-content: center;background-color:#111111;color:#151515" +
        "margin:0; left:0; bottom:0;padding:4px;z-index:1000;text-align:center;font-family:'Josefin Sans'";
      var cookieConsentElement = document.createElement("div");
      cookieConsentElement.id = cookieConsentId;
      cookieConsentElement.style.cssText = butterBarStyles;
      cookieConsentElement.appendChild(_createConsentText(cookieText));
      if (!!linkText && !!linkHref) {
        cookieConsentElement.appendChild(
          _createInformationLink(linkText, linkHref)
        );
      }
      cookieConsentElement.appendChild(_createDismissLink(dismissText));
      return cookieConsentElement;
    }
    function _createDialogElement(cookieText, dismissText, linkText, linkHref) {
      var glassStyle =
        "position:fixed;width:100%;height:100%;z-index:999;" +
        "bottom:0;left:0;opacity:0.5;filter:alpha(opacity=50);" +
        "background-color:#000000;";
      var dialogStyle = "z-index:1000;position:fixed;left:50%;top:50%,";
      var contentStyle =
        "position:relative;left:-50%;margin-top:-25%;" +
        "background-color:#000000;padding:20px;box-shadow:4px 4px 25px #888;";
      var cookieConsentElement = document.createElement("div");
      cookieConsentElement.id = cookieConsentId;
      var glassPanel = document.createElement("div");
      glassPanel.style.cssText = glassStyle;
      var content = document.createElement("div");
      content.style.cssText = contentStyle;
      var dialog = document.createElement("div");
      dialog.style.cssText = dialogStyle;
      var dismissLink = _createDismissLink(dismissText);
      dismissLink.style.display = "block";
      dismissLink.style.textAlign = "right";
      dismissLink.style.marginTop = "8px";
      content.appendChild(_createConsentText(cookieText));
      if (!!linkText && !!linkHref) {
        content.appendChild(_createInformationLink(linkText, linkHref));
      }
      content.appendChild(dismissLink);
      dialog.appendChild(content);
      cookieConsentElement.appendChild(glassPanel);
      cookieConsentElement.appendChild(dialog);
      return cookieConsentElement;
    }
    function _setElementText(element, text) {
      if (supportsTextContent) {
        element.textContent = text;
      } else {
        element.innerText = text;
      }
    }
    function _createConsentText(cookieText) {
      var consentText = document.createElement("span");
      _setElementText(consentText, cookieText);
      return consentText;
    }
    function _createDismissLink(dismissText) {
      var dismissLink = document.createElement("a");
      _setElementText(dismissLink, dismissText);
      dismissLink.id = dismissLinkId;
      dismissLink.href = "#";
      dismissLink.style.marginLeft = "24px";
      return dismissLink;
    }
    function _createInformationLink(linkText, linkHref) {
      var infoLink = document.createElement("a");
      _setElementText(infoLink, linkText);
      infoLink.href = linkHref;
      infoLink.target = "_blank";
      infoLink.style.marginLeft = "8px";
      return infoLink;
    }
    function _dismissLinkClick() {
      _saveUserPreference();
      _removeCookieConsent();
      return false;
    }
    function _showCookieConsent(
      cookieText,
      dismissText,
      linkText,
      linkHref,
      isDialog
    ) {
      if (_shouldDisplayConsent()) {
        _removeCookieConsent();
        var consentElement = isDialog
          ? _createDialogElement(cookieText, dismissText, linkText, linkHref)
          : _createHeaderElement(cookieText, dismissText, linkText, linkHref);
        var fragment = document.createDocumentFragment();
        fragment.appendChild(consentElement);
        document.body.appendChild(fragment.cloneNode(true));
        document.getElementById(dismissLinkId).onclick = _dismissLinkClick;
      }
    }
    function showCookieConsentBar(cookieText, dismissText, linkText, linkHref) {
      _showCookieConsent(cookieText, dismissText, linkText, linkHref, false);
    }
    function showCookieConsentDialog(
      cookieText,
      dismissText,
      linkText,
      linkHref
    ) {
      _showCookieConsent(cookieText, dismissText, linkText, linkHref, true);
    }
    function _removeCookieConsent() {
      var cookieChoiceElement = document.getElementById(cookieConsentId);
      if (cookieChoiceElement != null) {
        cookieChoiceElement.parentNode.removeChild(cookieChoiceElement);
      }
    }
    function _saveUserPreference() {
      // Durata del cookie di un anno
      var expiryDate = new Date();
      expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      document.cookie = cookieName + "=y; expires=" + expiryDate.toGMTString();
    }
    function _shouldDisplayConsent() {
      // Per mostrare il banner solo in mancanza del cookie
      return !document.cookie.match(new RegExp(cookieName + "=([^;]+)"));
    }
    var exports = {};
    exports.showCookieConsentBar = showCookieConsentBar;
    exports.showCookieConsentDialog = showCookieConsentDialog;
    return exports;
  })();
  window.cookieChoices = cookieChoices;
  return cookieChoices;
})(this);
document.addEventListener("DOMContentLoaded", function (event) {
  cookieChoices.showCookieConsentBar(
    "Questo sito utilizza i cookie per migliorare servizi ed esperienza dei lettori. Se decidi di continuare la navigazione consideriamo che accetti il loro uso.",
    "OK",
    "Info",
    "cookie-policy.html"
  );
});
//]]>
