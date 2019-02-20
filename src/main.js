let selectedPokemon;

const pickPokemon = () => { //Seleccionar un pokemon al azar
   const randomNumber = Math.floor(Math.random()*151);
   selectedPokemon = POKEMON.pokemon[randomNumber];
   return selectedPokemon;
};

const getPokemonName = () => { //Recibir el nombre del pokemon a buscar
   selectedPokemon = document.getElementById('searchBar').value;
   return selectedPokemon;
}


const findPokemon = () => {
   const pokemonInfo = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemonName());
   //console.table(pokemonInfo);
   return pokemonInfo;
}

// EVENT LISTENERS
document.getElementById('searchButton').addEventListener('click',findPokemon); //Llamar al botón BUSCAR
