// mobile navi
let openNav = document.querySelector(".ham-btn");
let mobileNav = document.querySelector('#nav');
let icon =document.querySelector('#icons')
let noDisplay =document.querySelectorAll('.no-display');
let clsBtn = document.querySelector('.cls-btn');

openNav.addEventListener("click", function(){
    mobileNav.style.display ='flex'; 
   for( i =0; i<noDisplay.length; i++){
    noDisplay[i].style.display ='none';
   }
});

clsBtn.addEventListener('click',function(){
    mobileNav.style.display= 'none';
    for( i =0; i<noDisplay.length; i++){
        noDisplay[i].style.display ='block';
       }
       icon.style.display='flex';

})

