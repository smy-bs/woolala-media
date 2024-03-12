"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#nav");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu

const navToggle = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".nav_menu");
navToggle.addEventListener("click", () => {
     navbarMenu.classList.toggle("open");
     });
navbarMenu.addEventListener("click", ()=>{
  navbarMenu.classList.remove("open");
});



//Show " arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
