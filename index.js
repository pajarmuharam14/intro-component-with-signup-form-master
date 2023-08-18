const form = document.querySelector("#form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const firstNameErrorMessages = document.querySelector(".first-name-error");
const lastNameErrorMessages = document.querySelector(".last-name-error");
const emailErrorMessages = document.querySelector(".email-error");
const passwordErrorMessages = document.querySelector(".password-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstNameInput.value == 0) {
    firstNameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    firstNameErrorMessages.innerHTML = "First Name cannot be empty";
  } else {
    firstNameInput.style.border = "1px solid hsl(249, 10%, 26%)";
    firstNameErrorMessages.innerHTML = "";
  }

  if (lastNameInput.value == 0) {
    lastNameInput.style.border = "1px solid hsl(0, 100%, 74%)";
    lastNameErrorMessages.innerHTML = "Last Name cannot be empty";
  } else {
    lastNameInput.style.border = "1px solid hsl(249, 10%, 26%)";
    lastNameErrorMessages.innerHTML = "";
  }

  if (passwordInput.value == 0) {
    passwordInput.style.border = "1px solid hsl(0, 100%, 74%)";
    passwordErrorMessages.innerHTML = "Password cannot be empty";
  } else {
    passwordInput.style.border = "1px solid hsl(249, 10%, 26%)";
    passwordErrorMessages.innerHTML = "";
  }

  if (emailInput.value.match(regex)) {
    emailInput.style.border = "1px solid hsl(249, 10%, 26%)";
    emailErrorMessages.innerHTML = "";
  } else {
    emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
    emailErrorMessages.innerHTML = "Looks like this is not an email";
  }
});
