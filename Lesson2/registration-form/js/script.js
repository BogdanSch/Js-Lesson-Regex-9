const registrationForm = document.forms["orderForm"];
registrationForm.addEventListener("submit", validateForm);

const loginInput = registrationForm.elements["login"];
const emailInput = registrationForm.elements["email"];
const phoneInput = registrationForm.elements["phone"];
const passwordInput = registrationForm.elements["password"];
const formErrorMessage = document.getElementById("formErrorMessage");

const loginRegex = /^[a-zA-Z][a-zA-Z0-9_]{7,19}$/;
const passwordRegex = /^(?=.*[A-Z])[a-zA-Z][a-zA-Z0-9_*]{7,19}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

function showErrorMessage(message) {
  formErrorMessage.classList.remove("hiden");
  formErrorMessage.innerHTML = message;
  formErrorMessage.scrollIntoView();
}

function validateForm(event) {
  if (!loginRegex.test(loginInput.value)) {
    showErrorMessage("Invalid login. Please follow the specified format.");
    event.preventDefault();
    return false;
  }
  if (!emailRegex.test(emailInput.value)) {
    showErrorMessage("Invalid email address. Please enter a valid email.");
    event.preventDefault();
    return false;
  }
  if (!phoneRegex.test(phoneInput.value)) {
    showErrorMessage("Invalid phone number. Please enter a 10-digit number.");
    event.preventDefault();
    return false;
  }
  if (!passwordRegex.test(passwordInput.value)) {
    showErrorMessage("Invalid password. Please follow the specified format.");
    event.preventDefault();
    return false;
  }

  return true;
}
