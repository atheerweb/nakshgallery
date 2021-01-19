
const navbarMenu = document.querySelector(".navbar__menu");
const navbarToggle = document.querySelector("#mobile-menu")
const navLogo = document.querySelector("#navbar__logo")



// Display mobile menu


const activeMenu = () => {
    navbarMenu.classList.toggle("active")
    navbarToggle.classList.toggle("isactive")
}
document.querySelector(".mobile__toggle").addEventListener('click',activeMenu);


// Hide mobile menu when clicking on links

navbarMenu.addEventListener('click',activeMenu);





// Show active menu when scrolling

const highlightMenu = () => {
    const bottomborder = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#aboutus-page')
    const serviceMenu = document.querySelector('#services-page')
    let scrollP = window.scrollY

    
   // to know scroll breakpoints console.log(scrollP)

 //adding highlight class
 if(window.innerWidth > 960 && scrollP < 168){
     homeMenu.classList.add("highlight")
     aboutMenu.classList.remove("highlight")
     serviceMenu.classList.remove("highlight")
     return
 }else if (window.innerWidth > 960 && scrollP < 991){
    aboutMenu.classList.add("highlight")
    homeMenu.classList.remove("highlight")
    serviceMenu.classList.remove("highlight")
    return
 }else if (window.innerWidth > 960 && scrollP < 2048){
    serviceMenu.classList.add("highlight")
    aboutMenu.classList.remove("highlight")
   return
 }
 if((bottomborder && window.innerWidth < 960 && scrollP < 168) || bottomborder){
    bottomborder.classList.remove("highlight")
}
}
window.addEventListener('scroll' , highlightMenu)
window.addEventListener('click' , highlightMenu)


