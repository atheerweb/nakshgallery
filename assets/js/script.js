//responsive menu 

var navbarMenu = document.querySelector(".navbar__menu");
var navbarToggle = document.querySelector("#mobile-menu")
var navLogo = document.querySelector("#navbar__logo")


document.querySelector(".mobile__toggle").addEventListener('click', function () {
    navbarMenu.classList.toggle("active")
    navbarToggle.classList.toggle("isactive")
});