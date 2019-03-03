// Abrir y cerrar nav bar
document.getElementById("openBtn").addEventListener("click", openNav = () => { 
    document.getElementById("mySidenav").style.width = "150px";
});
document.getElementById("closeBtn").addEventListener("click", closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
});
// Abrir submenus
 document.getElementById("typeBtn").addEventListener("click", openSubMenu = () => {
     document.getElementById("typeMenu").classList.toggle("show")
 });
 document.getElementById("weakBtn").addEventListener("click", openSubMenu = () => {
     document.getElementById("weakMenu").classList.toggle("show")
 });
 document.getElementById("orderBtn").addEventListener("click", openSubMenu = () => {
     document.getElementById("orderMenu").classList.toggle("show")
 });

// // Abrir solo un submenu a la vez
//  const showAndHide = (a,b,c) => {
//    const elementA = document.getElementById(a);
//    const elementB = document.getElementById(b);
//    const elementC = document.getElementById(c);
 
//     elementB.style.display=“none”;
//     elementC.style.display=“none”;
 
//         if (elementA.style.display===“none”){
//             elementA.style.display = “block”;
//         } else {
//             elementA.style.display=“none”;
//         }
//  };
//  document.getElementById(“typeBtn”).addEventListener(“click”, () => {
//     showAndHide (“typeMenu”, “weakMenu”, “orderMenu”);
//  } );
//  document.getElementById(“weakBtn”).addEventListener(“click”, () => {
//     showAndHide (“weakMenu”, “typeMenu”, “orderMenu”);
//  } );
//  document.getElementById(“orderBtn”).addEventListener(“click”, () => {
//     showAndHide (“orderMenu”, “typeMenu”, “weakMenu”);
//  } );


//Filtrar
const filterPokemon=(data,whatToFilter, valueToCompare) => {
    return data.filter(pokemon=>{
        for(let i=0; i<pokemon[whatToFilter].length; i++){
            if(pokemon[whatToFilter][i]==valueToCompare){
                return pokemon;
            }
        }
    });
}

const selectPokemonList = (whichList, property, element) => {
    if (whichList==="filter") {
        console.log(filterPokemon(window.POKEMON.pokemon, property, element));
        return;
    }
}

document.getElementById("typeNormal").addEventListener("click", () => selectPokemonList("filter", document.getElementsByClassName("submType"), document.getElementById("typeNormal").value));

// Búsqueda y filtrado 

let selectedPokemon;
let pokemonObject;

const pickPokemon = () => { //Seleccionar un pokemon al azar
    const randomNumber = Math.floor(Math.random()*151);
    selectedPokemon = POKEMON.pokemon[randomNumber];
    return selectedPokemon;
};

const getPokemon = () => { //Recibir el nombre del pokemon a buscar
    selectedPokemon = document.getElementById("searchBar").value;
    return selectedPokemon;
}

const findPokemonName = () => { //Encontrar pokemon por nombre
    pokemonObject = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemon());
    console.table(pokemonObject);
    return pokemonObject;
}

const findPokemonNum = () => { //Encontrar pokemon por numero
    pokemonObject = POKEMON.pokemon.find(pokemonId => pokemonId.id == getPokemon());
    console.table(pokemonObject);
    return pokemonObject;
}

const findPokemon = () => { //Realizar búsqueda
    findPokemonName();
    if(pokemonObject == undefined){
        findPokemonNum();
        showInfo();
    } else {
        showInfo();
    }
}

let showInfo = () => { //Mostrar datos del pokemon
    document.getElementById("pokeName").innerHTML = pokemonObject.name;
    document.getElementById("pokeNum").innerHTML = pokemonObject.num;
    document.getElementById("pokemonPicture").src = pokemonObject.img;
    document.getElementById("pokeType").innerHTML = pokemonObject.type;
    //document.getElementById("pokeEvolution").innerHTML = //leer todo el arreglo e imprimir (map? filter?)
    document.getElementById("pokeDescription").innerHTML = pokemonObject.description + pokemonObject.height + pokemonObject.weight;
    document.getElementById("pokeWeaknesses").innerHTML = pokemonObject.weaknesses;
    document.getElementById("frequencySpawn").innerHTML = pokemonObject.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = pokemonObject.spawn_time;
    document.getElementById("kmEgg").innerHTML = pokemonObject.egg;
    document.getElementById("candies").innerHTML = pokemonObject.candy_count;
};


// EVENT LISTENERS
document.getElementById("searchButton").addEventListener("click",findPokemon); //Llamar al botón BUSCAR

/*const printPokemon = (itemToPrint) => {
    document.getElementsByClassName("pokemonInfo").innerHTML = itemToPrint;
}*/

//const searchPokemon = POKEMON.pokemon.find(pokemonName => pokemonName.name === selectedPokemon); //Buscar un pokemon por nombre
//console.table(searchPokemon);

/* ESTA FUNCIONABA SOLO CON NOMBRE, AUN SIN NUM OR FAVOR NO LA CAGUES
const findPokemon = () => {
    const pokemonInfo = POKEMON.pokemon.find(pokemonName => pokemonName.name === getPokemonName());
    console.table(pokemonInfo);
    return pokemonInfo;
}
*/

/* ESTA SI FUNCIONA
const getName = () => {
    selectedPokemon = document.getElementById("searchBar").value;
    console.log(selectedPokemon);
    return selectedPokemon;
}

// EVENT LISTENERS
//document.getElementById('searchButton').addEventListener('click',findPokemon); //Llamar al botón BUSCAR */ 
