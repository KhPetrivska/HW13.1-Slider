"use strict";
const imagesArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const image = document.querySelector("img");
const rightArrowBtn = document.querySelector(".btn-right");
const leftArrowBtn = document.querySelector(".btn-left");
const dotsContainer = document.querySelector(".dots-container");
let imgIndex = 0;

//Arrow Buttons

rightArrowBtn.addEventListener("click", (event) => {
  if (imgIndex < imagesArray.length - 1) {
    imgIndex++;
    image.src = `img/${imagesArray[imgIndex]}`;
  }
  activateDot();
  arrowVisibility();
});

leftArrowBtn.addEventListener("click", (event) => {
  if (imgIndex > 0) {
    imgIndex--;
    image.src = `img/${imagesArray[imgIndex]}`;
  }
  activateDot();
  arrowVisibility();
});

function arrowVisibility() {
  if (imgIndex === 0) {
    leftArrowBtn.style.visibility = "hidden";
    rightArrowBtn.style.visibility = "visible";
  } else if (imgIndex === imagesArray.length - 1) {
    leftArrowBtn.style.visibility = "visible";
    rightArrowBtn.style.visibility = "hidden";
  } else {
    leftArrowBtn.style.visibility = "visible";
    rightArrowBtn.style.visibility = "visible";
  }
}

///Dots

const dotsArray = [];
imagesArray.forEach((item) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotsArray.push(dot);
  dotsContainer.appendChild(dot);
});
dotsArray[0].classList.add("active-dot");

function activateDot() {
  dotsArray.forEach((dot, i) => {
    if (imgIndex === i) {
      dot.classList.add("active-dot");
    } else {
      dot.classList.remove("active-dot");
    }
  });
}
dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    imgIndex = dotsArray.indexOf(event.target);
    image.src = `img/${imagesArray[imgIndex]}`;
    activateDot();
    arrowVisibility();
  }
});
arrowVisibility();
