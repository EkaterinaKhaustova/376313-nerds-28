var FormButton = document.querySelector(".button-message");
var FormPopup = document.querySelector(".text-form");
var FormClose = FormPopup.querySelector(".modal-close");
var FormForm = FormPopup.querySelector(".modal-form");
var FormLogin = FormPopup.querySelector(".name-icon-user");
var FormPassword = FormPopup.querySelector(".email-icon-user");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

FormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormPopup.classList.add("modal-show");
  
  if (storage) {
    FormLogin.value = storage;
    FormPassword.focus();
  } else {
    FormLogin.focus();
  }
});

FormClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormPopup.classList.remove("modal-show");
  FormPopup.classList.remove("modal-error");
});

FormForm.addEventListener("submit", function (evt) {
  if (!FormLogin.value || !FormPassword.value) {
    evt.preventDefault();
    FormPopup.classList.remove("modal-error");
    FormPopup.offsetWidth = FormPopup.offsetWidth;
    FormPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", FormLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (FormPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      FormPopup.classList.remove("modal-show");
      FormPopup.classList.remove("modal-error");
    }
  }
});


var Link = document.querySelector(".projects-name");
var Popup = document.querySelector(".projects-form");
var Close = Popup.querySelector(".modal-close");



Link.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.add("modal-show");
  
});

Close.addEventListener("click", function (evt) {
  evt.preventDefault();
  Popup.classList.remove("modal-show");
  Popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (Popup.classList.contains("modal-show")) {
      evt.preventDefault();
      Popup.classList.remove("modal-show");
      Popup.classList.remove("modal-error");
    }
  }
});