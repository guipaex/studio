const menuBtn = document.getElementById("mobile-btn");
const links = document.getElementById("links")

menuBtn.addEventListener('click', toggleMenu);
menuBtn.addEventListener('touchstart', toggleMenu);
links.addEventListener('click', toggleMenu);
links.addEventListener('touchstart', toggleMenu);

function toggleMenu(event){
   if(event.type === 'touchstart'){
       event.preventDefault();
   }
   const menu = document.getElementById("nav");
   menu.classList.toggle('active');
}