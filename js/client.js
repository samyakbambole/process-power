console.log('Do not enter anything here unless you know. ');
console.log('Entering anything in the console can even crash the website');
console.log('This is a dummy website. This is not a serious business. '); 

burger = document.querySelector('.burger'); 
navbar = document.querySelector('.navbar'); 
rightNav = document.querySelector('.rightNav'); 
navList = document.querySelector('.nav-list'); 

burger.addEventListener('click', () => {
     rightNav.classList.toggle('v-class-resp'); 
     navList.classList.toggle('v-class-resp'); 
     navbar.classList.toggle('h-nav-resp'); 
}); 