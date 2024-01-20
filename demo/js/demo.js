"use strict";

let reg = /str/;
let str = "this is a string";
console.log(reg.test(str)); // true
console.log(str.match(reg)); // ['str', index: 10, input: 'this is a string', groups: undefined]

let regAll = /[a-c\s]s/gi; // ^(вилучити символ)
let regOne = /is/i;
let str1 = "THIS is a string";
let matchesAll = str1.match(regAll); // вернет массив из всех фрагментов, которые соответствуют шаблону
let matchesOne = str1.match(regOne); // вернет первый фрагмент, который соответствует шаблону
if (matchesAll) console.log(matchesAll); // IS, is
if (matchesOne) console.log(matchesOne); // ['IS', index: 2, input: 'THIS is a string', groups: undefined]

let regThis = /^this/i;
let reg4 = /book|this/i; ///\b\w*\b/g;
let s = "This is a bookbookbook bookbook bookdjksfjk";
if (regThis.test(s)) {
  let matches = s.match(reg4);
  if (matches) console.log(matches); //this,book
}
