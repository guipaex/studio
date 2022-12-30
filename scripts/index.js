const menuBtn = document.getElementById("mobile-btn");
const links = document.getElementById("links")
const menu = document.getElementById("nav");

menuBtn.addEventListener('click', toggleMenu);
links.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu);

function toggleMenu(event){
   if(event.type === 'touchstart'){
       event.preventDefault();
   }
   menu.classList.toggle('active');   
}