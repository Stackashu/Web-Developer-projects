const burger =document.querySelector(".burger")
const navbar = document.querySelector(".nav")
const leftNav = document.querySelector(".leftNav")
const rightNav = document.querySelector(".rightNav")
 

burger.addEventListener("click",function(){
    navbar.classList.toggle('h-nav')
    leftNav.classList.toggle('v-nav')
    rightNav.classList.toggle('v-nav')

 })
