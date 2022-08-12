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
window.onload = function () {
    var x = new XMLHttpRequest();
    x.onload = function () {
      var json = JSON.parse(x.response);
      console.log(json);
      let output='';
      for (let key = 0; key < json.length; key++) {
        let ele = document.createElement("div");
        let output='';
        ele.style.cssText =
          "background-color:rgb(208, 211, 212 );width:30vw;height:30vh;border:2px solid black;border-radius:10px 10px 10px 10px;margin-top:0.5rem";
          output += `
            <ul id="list1">
                <li>Name: ${json[key].name}</li>
                <li>Username: ${json[key].username}</li>
                <li>Email-id: ${json[key].email}</li>
                <li>Street: ${json[key].address.street}</li>
                <li>Suite: ${json[key].address.suite}</li>
                <li>City: ${json[key].address.city}</li>
                <li>Zipcode: ${json[key].address.zipcode}</li>
                <li>Latitude: ${json[key].address.geo.lat}</li>
                <li>Longitude: ${json[key].address.geo.lng}</li>
                <li>Phone-number: ${json[key].phone}</li>
                <li>Website: ${json[key].website}</li>
                <li>Company-Name: ${json[key].company.name}</li>
                <li>Company-CatchPhrase: ${json[key].company.catchPhrase}</li>
                <li>Company-BS: ${json[key].company.bs}</li>
            </ul>
      `
        ele.innerHTML=output;
        document.getElementById("data").appendChild(ele);
      }
      console.log(typeof json[2].body);
    };
    x.open(
      "get",
      "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11"
    );
    x.send();
  };