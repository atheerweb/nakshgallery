
const navbarMenu = document.querySelector(".navbar__menu");
const navbarToggle = document.querySelector("#mobile-menu")
const navLogo = document.querySelector("#navbar__logo")



// Display mobile menu
document.querySelector(".mobile__toggle").addEventListener('click',  () => {
    navbarMenu.classList.toggle("active")
    navbarToggle.classList.toggle("isactive")
});


