const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  const formGroup = document.querySelectorAll(".alert-field");

  let isValid = true;

  // Validate first name
  if (firstName === "") {
    isValid = false;
    document.querySelector("#first-name + .alert-field").style.display = "block";
    document.querySelector("#first-name").style.border = "1px solid red";
  } else {
    document.querySelector("#first-name + .alert-field").style.display = "none";
    document.querySelector("#first-name").style.border = "1px solid gray";
  }

  // Validate last name
  if (lastName === "") {
    isValid = false;
    document.querySelector("#last-name + .alert-field").style.display = "block";
    document.querySelector("#last-name").style.border = "1px solid red";
  } else {
    document.querySelector("#last-name + .alert-field").style.display = "none";
    document.querySelector("#last-name").style.border = "1px solid gray";
  }

  // Validate email
  if (!isValidEmail(email)) {
    isValid = false;
    document.querySelector("#email + .alert-field").style.display = "block";
    document.querySelector("#email").style.border = "1px solid red";
  } else {
    document.querySelector("#email + .alert-field").style.display = "none";
    document.querySelector("#email").style.border = "1px solid gray";
  }

  // Validate query type
  if (!queryType) {
    isValid = false;
    document.querySelector(".radio-form + .alert-field").style.display = "block";
  } else {
    document.querySelector(".radio-form + .alert-field").style.display = "none";
  }

  // Validate message
  if (message === "") {
    isValid = false;
    document.querySelector("#message + .alert-field").style.display = "block";
    document.querySelector("#message").style.border = "1px solid red";
  } else {
    document.querySelector("#message + .alert-field").style.display = "none";
    document.querySelector("#message").style.border = "1px solid gray";
  }

  // Validate consent
  if (!consent) {
    isValid = false;
    formGroup[5].classList.add("form-error");
  } else {
    formGroup[5].classList.remove("form-error");
  }

  // If all fields are valid, submit the form
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
