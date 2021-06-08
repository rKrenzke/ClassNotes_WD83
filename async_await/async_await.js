//Asynchronous JS Functions


function standardFunction() {
    return "This is a standard function.";
}

async function asyncFunc() {
    return Promise.resolve("This is resolved");
}

async function asyncAction(){
    setTimeout(() => {
        console.log("This function has a setTimeout")
    }, 3000);
}

let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2){
        resolve("Your math checks out");
    } else{
        reject("Something is wrong with your math");
    }      
})

p.then((message) => {
    //anything inside .then is a resolve. Takes a fx with single parameter
    console.log(`This is the ${message}`);
}).catch((message) => {
    //anthing inside the .catch is a reject. Takes a fx with a single parameter
    console.log(`This is the ${message}`);
})

//* Try, Catch, Throw, and Finally *//

try {
    // someFunctionThatDoesntExist();
    console.log("Start of the try");
} catch(err){
    console.log("Error has occurred" + err);
} finally {
    //executes the code after try/catch regardelss of the result
    console.log("Finally ALWAYS runs");
}

let json = '{"age" : 30}';

try {
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete Date: no name");
    }
} catch(e){
    console.log(`JSON Error: ${e}`)
}


function showData (){
    let finishedData;
    fetch(url)  //We use the fetch() method and pass in the url variable (which by this point includes the following data: baseURL, API key, pageNumber, searchTerm string, beginning date, and end date)
        .then(function(result){  
            console.log(result)   //The 'result' variable represents that data returned from our fetch(url) function
            return result.json();   //We take the returned data and invoke the json() method to transform the data into a JSON object, therefore allowing us to interact with it and display it's values.
        }).then(function(json){     
            finishedData = json;   //We then take the JSON-ified object and pass it into our displayResults() function
        });
    displayAllMyPhotos(finishedData);
}

function addNums(...nums){
    let total = 0;
    nums.map(number => {total = total + number})
    console.log(total)
}

addNums(1, 2, 3, 4, 5, 6, 7, 8, 9)

//Below will break because 'nums' is not an array without rest operator, therefore it cannot be mapped (iterated) through
// function addNums1(nums){
//     let total = 0;
//     nums.map(number => {
//         total = total + number
//     })
//     console.log(total)
// }

// addNums1(1, 2, 3, 4, 5, 6, 7, 8, 9)

function sayHallo(){
    console.log("Heyja!")
}

class Swede {
    sayBye(){
        console.log("Byeja!");
    }
}

let Sven = new Swede;

sayHallo();
Sven.sayBye();