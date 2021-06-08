// let h1 = document.createElement("h1");

// h1.innerText = "Welcome to DOM manipulation!";

// document.body.appendChild(h1);

let h3 = document.getElementById("id-method");
h3.innerText = ".getElementById";
h3.style.color = "white";

let p = document.getElementById("get-id");
p.innerText = "Method used to grab the first element with a specific id";

let btn = document.getElementById('clickThis');
let red = true;

btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    event.target.innerText = "Clicked!";
    event.target.style.color = "white";
    red = !red;
})
