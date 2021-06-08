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

//switch(condition)
  //case (condition 2)
  //case (condition 3)
  //case (condition 4)

//condition === condition 2?  Yes - run the code in THAT case block and then exit loop.  No - continue on to next case
//condition === condition 3?

//boolean === boolean //Yay!
//number === boolean //! NO


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


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (letter in alphabet){
  if (letter % 2 === 0){
    console.log(alphabet[letter]);
  } else{
    console.log(`${letter} - This letter's index is odd`)
  }
}






let fellowshipOfTheRing = {
  members: {
      Gandalf: 'Staff',
      Frodo: 'Sting',
      Sam: 'Lembas Bread',
      Aragorn: 'Anduril',
      Legolas: 'Bow of the Galadhrim',
      Gimli: 'Walking Axe',
      Pippin: 'Barrow Blades',
      Merry: 'Barrow Blades',
      Boromir: 'Horn of Gondor'
  },
  purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
  formed: '25 October, 3018',
  dissolved: '26 February, 3019'
}

let arr = [];

for (character in fellowshipOfTheRing.members){
  let firstVowel = character[0].match(/[AEIOU]/g);
  if (!firstVowel){
    arr.push(character);
  }
}

console.log(arr);


let british = ["Rolls Royce", "Bentley", "Caterham", "Aston Martin"];
// console.log(british[british.length - 1]); //getting the last element in the array (when we don't know how long it is)

//* ARRAY METHODS 
//.length
//.push - appends element to the end of an array
british.push("Mini");
// console.log(british);

//splice - removes an element from an array and, if necessary, replaces with new values

              //1 //2  //3
british.splice(0, 1, "Jaguar") 
    //1 - starting index position
    //2 - how many values to remove
    //3 - new values (if any) to insert

british.forEach(car => console.log(car));

let filterArr = british.filter(car => car.startsWith("J"));
console.log(filterArr);

//*OBJECTS*//

let car = {
  make: "Porsche",
  model: '911',
  country: "Germany"
}

let returnKeys = Object.keys(car);
console.table(car);

car.make = "Ford";
console.log(car);



let client = new Object;
client.idNumber = 3456;
client.firstName = 'Ryan';
client.sayHi = () => console.log(`${client.firstName} says hi!`);

console.log(client)

client.sayHi();




let manager = {
  firstName: 'Jon',
  birthYear: 1990,
  calcAge: function(){
    return  console.log(2021 - this.birthYear);
  }
}

manager.firstName

manager.calcAge();

console.log();




function addNums (num1, num2){
  return num1 + num2;
}

let newNum = addNums(5, 10);
console.log(newNum);

let myNum = 10 + newNum;

console.log(myNum);






function someFunc(){
  return "this is a function";
}

console.error(someFunc());