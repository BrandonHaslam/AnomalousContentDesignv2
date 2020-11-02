// Sidebar/navbar
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");
const header = document.getElementById("header");
const body = document.body;
let navbarActive = false;
hamburger.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  navbarActive = !navbarActive;
  console.log(navbarActive);
  if (navbarActive) {
    navbar.style.width = "100vw";
  } else {
    navbar.style.width = "0";

    // hamburger.style.position = "static";
  }
}
// toggleNavbar();
