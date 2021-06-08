let cardImg = document.querySelector("body > div > div > div.card-img > img");
let name = document.querySelector(".name");
let ability = document.querySelector(".ability");
let generateBtn = document.querySelector(".submit-btn");
let example = document.getElementById('exampleDiv')


// generateBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     let id = document.querySelector(".search-input").value;
    
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) //starts the process of fetching from our resource
//         .then(results => results.json()) // this method takes in a response (results), reads to completion and returns the results in a json format
//         .then(json => {
//             console.log(json);
//             displayPokemon(json);
//         });
// });

// function displayPokemon(data){
//     name.innerText = data.name;
//     cardImg.src = data.sprites.front_default;
//     ability.innerText = data.abilities[0].ability.name;
// }

generateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    let id = document.querySelector(".search-input").value;
    
    async function getPokemon(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data)
        displayPokemon(data);
    }
    getPokemon();
});


// let gifArr;

// function fetchGifs(){
//     //all the fetch crap
//     //at the end of the fetch
//     .then(json => gifArr = json.data)
// }

//displayGif function
function displayPokemon(data){
    name.innerText = data.name;
    cardImg.src = data.sprites.front_default;
    ability.innerText = data.abilities[0].ability.name;
    cardImg.setAttribute('id', 'charName')
}

function findPerimeter(length, width){
    let perimeter = (length + width) * 2;
    if (perimeter >= 20){
        return `True, the length of the perimeter is ${perimeter}`
    } else{
        return `False, the length of the perimeter is ${perimeter}`
    }
}

console.log(findPerimeter(10, 5));

let myName = (first, last) => {return `${first} ${last}`};

console.log(myName('Ryan','Krenzke'))

let school = {
    students: ['dave', 'john']
}

console.log(school.students[0]);
school.students.splice(0, 1, "ron");
console.log(school.students[0]);


for(i = 0; i < 100; i++){
    if(i %10 === 0){
        return
    }
}

function circCircum(radius){
    return 3.14 * radius * 2;
}

console.log(circCircum(10))



