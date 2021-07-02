const menu = document.getElementById("menu") ;
const nav = document.querySelector("nav") ;

menu.addEventListener("click" , () =>{
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    console.log("i'm clicked");
})