let selectedPokemon = "Mew";

const pickPokemon = () => {
    const randomNumber = Math.floor(Math.random()*151);
    randomPokemon = POKEMON.pokemon[randomNumber];
};

const getName = () => {
    selectedPokemon = document.getElementById("searchBar").value;
    console.log(selectedPokemon);
    return selectedPokemon;
}

let searchPokemon = POKEMON.pokemon.find(pokemonName => pokemonName.name === selectedPokemon);
console.table(searchPokemon);

document.getElementById("searchButton").addEventListener("click",searchPokemon);
/* ESTA SI FUNCIONA
const getName = () => {
    selectedPokemon = document.getElementById("searchBar").value;
    console.log(selectedPokemon);
    return selectedPokemon;
}

let searchPokemon = POKEMON.pokemon.find(pokemonName => pokemonName.name === selectedPokemon);
console.table(searchPokemon);
*/

//const pokeArray = ["img","num","name","type","next_evolution","prev_evolution","description","weaknesses","height","weight","spawn_chance","spawn_time","egg","candy_count"]

//const showProperties = searchPokemon.forEach();


/*const searchPokemon = POKEMON.pokemon.find(function(pokemonName){
    if(pokemonName.name === selectedPokemon){
        return true;
    }
});
*/

/*
const chosePokemon = (chosenPokemon) => {
    return chosePokemon;
}

console.log(POKEMON.pokemon.find(chosePokemon).type);

*/
//This variable shows the complete array of the pokemon selected
/*
var findPokemon = POKEMON.pokemon.find(function(pokemonName) {
    return pokemonName.name == "Charmander";
}); 
*/



//const findPokemon = POKEMON.pokemon.find(wantedPokemon => wantedPokemon.name == document.getElementById("searchBar").value);
/*
const findPokemon = POKEMON.pokemon.find(function(pokemonName) {
    return pokemonName.name == document.getElementById("searchBar").value;
}
);

document.getElementById('searchButton').addEventListener('click',findPokemon,false);
*/
//POKEMON.pokemon.find(wantedPokemon);

/*
const pokeArray = [num, name, type, description];

const showRandom = () => {
    randomPokem.
};

const showPoke = () => {
    document.getElementsByClassName("pokemonInfo").innerHTML = rpokeArray.forEach(element => {
        
    });
}
*/

/*
const showRandomPokemon = () => {
    pickPokemon();
    document.getElementById("pokemonNumber").innerHTML = "#"+randomPokemon.num;
    document.getElementById("pokemonName").innerHTML = randomPokemon.name;
}


showRandomPokemon();
*/
/*
pickPokemon();
console.log(randomPokemon.name);
console.log(randomPokemon.num);
console.log(randomPokemon.type);
console.log(randomPokemon.weaknesses);
*/


