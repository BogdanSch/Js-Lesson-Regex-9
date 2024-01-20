"use strict";

const textContainer = document.querySelector("#textContainer");
const answerContainer = document.querySelector("#answerContainer");

let regex = /(password|пароль): <b>(.+?)<\/b>/g;
let text = textContainer.innerHTML;

let matches = text.matchAll(regex);
const results = Array.from(matches);

answerContainer.innerHTML = "";

for (let i = 0; i < results.length; i++) {
  answerContainer.innerHTML += `<p>${results[i][0]}</p>`;
  //   alert(results[i][0] + " | " + results[i][1]);
}
