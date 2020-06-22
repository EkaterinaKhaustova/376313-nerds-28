var FormButton = document.querySelector(".button-message");
var FormPopup = document.querySelector(".text-form");
var FormClose = FormPopup.querySelector(".modal-close");
var FormForm = FormPopup.querySelector(".modal-form");
var FormName = FormPopup.querySelector(".name-icon-user");
var FormEmail = FormPopup.querySelector(".email-icon-user");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

FormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormPopup.classList.add("modal-show");
  
  if (storage) {
    FormName.value = storage;
    FormEmail.focus();
  } else {
    FormName.focus();
  }
});

FormClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  FormPopup.classList.remove("modal-show");
  FormPopup.classList.remove("modal-error");
});

FormForm.addEventListener("submit", function (evt) {
  if (!FormName.value || !FormEmail.value) {
    evt.preventDefault();
    FormPopup.classList.remove("modal-error");
    FormPopup.offsetWidth = FormPopup.offsetWidth;
    FormPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("text", FormName.value);
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