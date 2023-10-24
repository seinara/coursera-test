// This function will toggle the navigation menu when the user clicks on the hamburger icon.
function toggleMenu() {
  var menu = document.querySelector("nav");
  menu.classList.toggle("open");
}

// Add an event listener to the hamburger icon to toggle the menu when it is clicked.
var hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", toggleMenu);
