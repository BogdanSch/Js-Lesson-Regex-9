let strings = [
  "https://www.w3schools.com/",
  "this is not a URL",
  "https://google.com/",
  "123461",
  "https://en.wikipedia.org/wiki/JavaScript",
  "http://not a valid url",
  "abc http://invalid.url/",
];

let urlRegex = /https?:\/\/[^\s"]+/g;
let urls = strings.filter((str) => urlRegex.test(str));

console.log(urls);
