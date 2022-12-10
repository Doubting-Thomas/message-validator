"use strict";
const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const alertMessage = document.querySelector(".alert");
const successMessage = document.querySelector(".success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value === "") {
    alertMessage.classList.remove("reveal");
    successMessage.textContent = "";
    // Set a timeout if there is no user input
    setTimeout(function () {
      alertMessage.classList.remove("reveal");
    }, 10000);
  } else {
    successMessage.textContent = "Message successfully passed in!";
    alertMessage.classList.add("reveal");
  }
});
