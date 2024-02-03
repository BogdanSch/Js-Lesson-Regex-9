"use strict";

const fileNameInput = document.querySelector("#fileNameInput");
const checkFormButton = document.querySelector("#checkButton");

checkFormButton.addEventListener("click", (event) => {
  let fileName = fileNameInput.value.trim();
  let regex = /^[a-zA-Z][\w_]*\.(jpg|png|gif)$/i;

  console.log(fileName.match(regex));
  if (regex.test(fileName)) {
    alert("The file name is correct!");
  } else {
    alert("Incorrect file name was provided!");
  }
});
