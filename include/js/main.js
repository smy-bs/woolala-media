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

// navbar mobile version

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".nav_menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

//Navbar toggle button for small screen - not function!
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Handle click on "télécharge" button on home
const homeTelechargeBtn = document.querySelector(".telecharge");
homeTelechargeBtn.addEventListener("click", () => {
  scrollIntoView("#contents");
});

//transparent
const home = document.querySelector(".home_container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
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
