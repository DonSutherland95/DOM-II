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
  //   firstImg.style.transform = "scale(1.2)";
  firstImg.style.filter = "grayscale(100%)";

  //   setTimeout(function () {
  //     firstImg.style.filter = "grayscale(0%)";
  //   }, 1000);
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
// console.log(thirdImg);

// 7
