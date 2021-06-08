//* Class
//Create a class called Animal, incorporate a constructor function, and give the class three properties.
//Add a method to the class that console logs a string that uses interpolation with two or all three of the properties.
//Finally, create a variable that is a new instance of the class object and call the method. Hint: this is outside of the class you are creating

class Animal {
    constructor(type, age, color){
        this.type = type;
        this.age = age;
        this.color = color;
    }
    
    animal(){
        console.log(`My animal is ${this.type}, and he is ${this.age} years old and he is ${this.color}`);
    }
}

// let myAnimal = new Animal("cat", "one", "light grey")
// myAnimal.animal();


//Create a subclass that extends Animal. 
    //Create one additional property and one method.  
    //Finally, create a variable that is a new instance of the class and call the method.
    
class Cat extends Animal{
    constructor(type, age, color, game){
        super(type, age, color);
        this.game = game;
    }
    
    play(){
        console.log(`My animal likes to play with its ${this.game}`);
    }
}

// let myCat = new Cat("cat", "one", "light grey", "mouse toy");
// myCat.play();
// myCat.animal();


//* Object

//Take object of Princess Bride cast and do the following:
//- add the character Fezzik (played by Andre the Giant) to the cast list
    //- correct spelling of Robin Wright
    //- console log a list of only the characters names
    //- console log list of only actors names
    //** Challenge - capitalize the first letter in the list of character names */
    
let princessBride = {
    cast: {
        westley: 'Cary Elwes',
        buttercup: 'Robin Right',
        inigo_Montoya: 'Mandy Patinkin',
        vizzini: 'Wallace Shaw',
        miracle_Max: 'Billy Crystal',
        count_Rugen: 'Christopher Guest',
    }
}

princessBride.cast.fezzik = 'Andre the Giant';
princessBride.cast.buttercup = 'Robin Wright';
console.log(Object.keys(princessBride.cast));
console.log(Object.values(princessBride.cast));

let characters = Object.keys(princessBride.cast);
characters.forEach(character => console.log(character[0].toUpperCase()+ character.substring(1)));


//* DOM manipulation
    // Create a variable that holds the button element
    // Using that variable, make the button toggle between red and blue when clicked.

let btn = document.querySelector('.button');

let red = true;
btn.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    red = !red;
})



//* Array + DOM manipulation
//Create an array of food items (JS).
    // Create a button in HTML labeled 'Get First'. Then add the following JS functionality: gets the first item in the food array and adds it to the end of the array. Then console log the array;
    // Create a button in HTML labeled 'Get Last'. Then add the following JS functionality: gets the last item in the food array and adds it to the beginning of the array. Then console log the array;

    
let food = ['peanut butter', 'apples', 'chicken nuggets', 'muffins', 'cheese'];

let firstBtn = document.querySelector('.btn2');
let lastBtn = document.querySelector('.btn3');

firstBtn.addEventListener('click', getFirst);
lastBtn.addEventListener('click', getLast);
    
function getFirst(){
    let firstItem = food.shift();
    food.push(firstItem);
    //pass food array to a displayResults function (ex. displayResults())
    console.log(food);
}

function getLast(){
    let lastItem = food.pop();
    food.unshift(lastItem);
    console.log(food);
}


//* Array

//Create a function called 'pres'. Inside the function, do the following:
    //Using the .forEach method, loop over all of the presidents. Then, add the president's last name and year they were born to a new array as individual objects containing key/value pairs of each president's last name and date of birth.
    //Finally, return the new array from the function.
    //*Challenge - Create a new variable whos value is an array of only the presidents born after 1900. Console log the new variable. Hint: Use .filter()

    const presidents = [
        { first: 'George', last: 'Washington', year: 1732 },
        { first: 'John', last: 'Adams', year: 1735 },
        { first: 'Thomas', last: 'Jefferson', year: 1743 },
        { first: 'James', last: 'Madison', year: 1751 },
        { first: 'James', last: 'Monroe', year: 1758 },
        { first: 'Franklin', last: 'Pierce', year: 1804 },
        { first: 'James', last: 'Buchanan', year: 1791 },
        { first: 'Abraham', last: 'Lincoln', year: 1809 },
        { first: 'William', last: 'McKinley', year: 1843 },
        { first: 'Theodore', last: 'Roosevelt', year: 1858 },
        { first: 'William', last: 'Taft', year: 1857 },
        { first: 'Herbert', last: 'Hoover', year: 1874 },
        { first: 'Franklin', last: 'Roosevelt', year: 1882 },
        { first: 'Harry', last: 'Truman', year: 1884 },
        { first: 'Dwight', last: 'Eisenhower', year: 1890 },
        { first: 'John', last: 'Kennedy', year: 1917 },
        { first: 'Lyndon', last: 'Johnson', year: 1908 },
        { first: 'Richard', last: 'Nixon', year: 1913 },
        { first: 'Ronald', last: 'Reagan', year: 1911 },
        { first: 'George', last: 'Bush', year: 1924 },
        { first: 'Bill', last: 'Clinton', year: 1946 },
        { first: 'George', last: 'Bush', year: 1946 },
        { first: 'Barack', last: 'Obama', year: 1961 }
    ];

    function pres(){
        let newArray = [];
        presidents.forEach(p => {
            newArray.push({
                lastName: p.last,
                yearBorn: p.year
            });
        })
        return newArray;
    }

    let copyArray = pres();
    console.log(copyArray);

   let filterPrez = presidents.filter(person => person.first[0] === 'J');
   console.log(filterPrez);