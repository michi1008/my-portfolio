const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

//add fixed class to navbar
window.addEventListener("scroll", function() {
  if(window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed")
  }
});

// show sidebar
navBtn.addEventListener("click", function() {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function() {
  sidebar.classList.remove("show-sidebar");
});
sidebar.addEventListener("click", function() {
  sidebar.classList.remove("show-sidebar");
});
// slide 
const slides = document.querySelectorAll(".about__slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});
function carousel() {
if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";

// copyright year
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();