let body = document.querySelector("body");
let title = document.querySelector("h1");
let item = document.querySelectorAll(".item");
let subtitle = document.querySelectorAll("h2");
let content = document.querySelectorAll("p");
let header = document.querySelector("header");

function darkMode() {
  body.classList.toggle("darkBody");
  title.classList.toggle("darkTitle");
  header.classList.toggle("darkTitle");
  item.forEach((div) => div.classList.toggle("darkItem"));
  subtitle.forEach((h2) => h2.classList.toggle("darkContent"));
  content.forEach((p) => p.classList.toggle("darkContent"));
}
