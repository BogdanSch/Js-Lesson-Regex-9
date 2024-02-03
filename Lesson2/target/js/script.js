const linksContainer = document.getElementById("wrap");

let text = linksContainer.innerHTML.trim();
let externalUrls = text.match(/<a[^>]*\shref="([^"]*)"[^>]*>/gi);

if (externalUrls) {
  text = text.replace(/target="[^"]*"/gi, "");
  text = text.replace(/\s\s/g, " ");

  text = text.replace(/(<a)\s(href="http[^"]*")/gi, '$1 target="_blank" $2');
  linksContainer.innerHTML = text;
}
