var navbarMenu = document.querySelector(".navbar__menu");
var navbarToggle = document.querySelector("#mobile-menu")

document.querySelector(".mobile__toggle").addEventListener('click', function () {
    navbarMenu.classList.toggle("active")
    navbarToggle.classList.toggle("isactive")
});

