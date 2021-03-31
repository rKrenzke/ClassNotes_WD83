function colorToggle(){
    const title = document.getElementById("title");
    title.style.color === "red" ? title.style.color = "blue" : title.style.color = "red";
}

const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (e) => {
  const xPos = e.pageX - e.target.offsetLeft;
  const yPos = e.pageY - e.target.offsetTop;
  
  e.target.style.setProperty("--x", `${xPos}px`);
  e.target.style.setProperty("--y", `${yPos}px`);
});

let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i+= increment){
  console.log(i);
}

function fizzBuzz(number){
  number % 15 === 0 ? console.log("FizzBuzz") : number % 5 === 0 ? console.log("Buzz") : console.log("Fizz");
}

let fb = 55;
for (i = 0; i <= fb; i++){
  i % 15 === 0 ? console.log("FizzBuzz") : i % 5 === 0 ? console.log("Buzz") : i % 3 === 0 ? console.log("Fizz") : console.log(i);
}


let fb = 30;

switch(true){
  case fb % 15 === 0:
    console.log("FizzBuzz");
    break;
  case fb % 5 === 0 :
    console.log("Buzz");
    break;
  case fb % 3 === 0 :
    console.log("Fizz");
    break;
  default :
    console.log("No soup for you, one year!") 
}

// switch(condition 1)
  //case (condition 2)
  //case (condition 3)
  //case (condition 4)

// condition 1 === condition 2? Yes - run code and exit loop.  No - go on to next case
//  number === boolean 
// boolean === boolean 


let isOpen = null;

// if (isOpen === true){
//   console.log('The door is open.');
// }

if (isOpen){
  console.log('The door is open.');
} else{
  console.log('The door is shut.');
}

let doorStatus = (bool) => { bool ? console.log('the door is open') : console.log('the door is shut')};
doorStatus(false);


let favColor = 'green' //string;

switch (favColor /*string*/){
  case 'blue':
    console.log("Just like a summer's day");
    break;
  case 'red':
    console.log('Like blood on a thorn');
    break;
  default:
    console.log(`${favColor} is nice, but not my favorite`);
}


for (let i = 0; i <= 20; i += 2){
  console.log(i);
}