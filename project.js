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
document.querySelector('#button').addEventListener('click', () => {
    // API call
    const xhr = new XMLHttpRequest()
    const value = document.querySelector('#search').value

    const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&q=${value}&maxResults=50`

    xhr.open('GET', url, true)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText)

            let list = document.getElementById('list1');
            let output = ''
            for(key in response) {
                output += `
                
                <li>Name: ${response[key].name}</li>
                <li>Username: ${response[key].username}</li>
                <li>Email-id: ${response[key].email}</li>
                <li>Street: ${response[key].address.street}</li>
                <li>Suite: ${response[key].address.suite}</li>
                <li>City: ${response[key].address.city}</li>
                <li>Zipcode: ${response[key].address.zipcode}</li>
                <li>Latitude: ${response[key].address.geo.lat}</li>
                <li>Longitude: ${response[key].address.geo.lng}</li>
                <li>Phone-number: ${response[key].phone}</li>
                <li>Website: ${response[key].website}</li>
                <li>Company-Name: ${response[key].company.name}</li>
                <li>Company-CatchPhrase: ${response[key].company.catchPhrase}</li>
                <li>Company-BS: ${response[key].company.bs}</li>
                
            `
            }
            list.innerHTML=output;
        }
    }

    xhr.send()
})
document.getElementById('my-form').addEventListener("submit",function(e){
    e.preventDefault()
})