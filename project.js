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