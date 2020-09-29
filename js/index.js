// Your code goes here
// 1
let navLinks = document.querySelector("nav");
navLinks.addEventListener("mouseover", function (event) {
  event.target.style.color = "blue";

  setTimeout(function () {
    event.target.style.color = "";
  }, 500);
});

// 2
let container = document.querySelector(".home");
window.addEventListener("scroll", function (event) {
  container.style.backgroundColor = "#C0C0C0";
});
// container.addEventListener("scroll", function (event) {
//   event.style.backgroundColor = "#C0C0C0";
// });

// 3
let firstImg = document.querySelector(".img-content");
firstImg.addEventListener("click", function (event) {
  event.target.style.transform = scale(1.5);
});
