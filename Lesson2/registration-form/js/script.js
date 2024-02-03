const orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", verifyForm);

function verifyForm() {
  const lastNameField = orderForm.lname;
  const phoneField = orderForm.phone;

  if (lastNameField.value.length == 0) {
    alert("Уведіть прізвище");
    lastNameField.focus();
    return false;
  }
  if (
    !phoneField.value.match(
      /^\s*(\+38)?-?(057)-?(\d{2}|\d{3})-?\d{2}-?\d{2}\s*$/
    )
  ) {
    alert("Уведіть правильний телефон");
    phoneField.focus();
    return false;
  }
  return true;
}
