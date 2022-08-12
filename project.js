var navList=document.getElementById("nav-bar");
var navIcon=document.getElementById("nav-icon");
navList.style.maxHeight="0px";
function toggleMenu(){
    if(navList.style.maxHeight=="0px"){
        navList.style.maxHeight="260px";
    }
    else{
        navList.style.maxHeight="0px";
    }
}

navIcon.addEventListener("click",toggleMenu);

var btn=document.getElementById("nightmode");
var icons=document.getElementsByClassName("baby");
var ab=document.getElementById("about");
// var education=document.getElementById("API");
var contact=document.getElementById("contact");
var count=0;
function toggleMode(){
    if(count%2==0){
        ab.style.background="black";
        ab.style.transition="ease-in-out 1s";
        // education.style.backgroundColor="black";
        // education.style.transition="ease-in-out 1s";
        contact.style.background="black";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-sun fa-2x baby"></i>'
        console.log(count+" Dark Mode");


    }
    else{
        ab.style.background="linear-gradient( #2b5876 ,#4e4376)";
        ab.style.transition="ease-in-out 1s";
        // education.style.backgroundColor="white";
        // education.style.transition="ease-in-out 1s";
        contact.style.background="linear-gradient( #bdc3c7 , #2c3e50)";
        contact.style.transition="ease-in-out 1s";
        nightmode.innerHTML='<i class="fa-solid fa-moon fa-2x "></i>'
        console.log(count+" Light Mode");
    }
    count+=1;
}
btn.addEventListener("click",toggleMode)