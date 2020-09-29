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
  container.style.backgroundColor = "#87CEFA";
});

// 3
let firstImg = document.querySelector(".img-content");
firstImg.addEventListener("click", function (event) {
  firstImg.style.filter = "grayscale(100%)";
});

// 4
let navbar = document.querySelector(".main-navigation");
let footer = document.querySelector(".footer");
window.addEventListener("resize", function () {
  navbar.style.backgroundColor = "#CD5C5C";
  footer.style.backgroundColor = "#CD5C5C";
});

// 5
let secondImg = document.querySelector(".inverse-content .img-content");
secondImg.addEventListener("mousedown", () => {
  secondImg.style.filter = "invert(100%)";
});

// 6
let thirdImg = document.querySelector(".content-destination img");
thirdImg.addEventListener("dblclick", () => {
  thirdImg.style.filter = "brightness(150%)";
});

// 7

window.addEventListener("load", (event) => {
  container.style.color = "red";
});

// 8
headerImg = document.querySelector(".container .intro img ");
headerImg.addEventListener("mouseenter", (event) => {
  headerImg.style.border = "10px solid red";
});

// 9
headerImg.addEventListener("mouseleave", (event) => {
  headerImg.style.border = "";
});

// 10

let img = document.querySelector("img");
img.addEventListener("drag", (event) => {
  img.src =
    "https://lh3.googleusercontent.com/proxy/zsEHTd6YNZYK9fIbwHgxMJYxxMK_1KDYNopK91D8oLi67cBWt9rT9d6W55O0s4WC16cg7yshIIZrw6NnWGfKcf-FwOCbJkyrpl5n9JM";
});

//

console.log(propogation[0]);
document.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
  })
);
