// Importamos la clase Pokemon desde el archivo Pokemon.js
import Pokemon from './Pokemon.js';

var champs = [];

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");

button.addEventListener("click", () => {

    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
    document.querySelector('#wiki').style.visibility = 'visible';
    // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
    startWiki();
});


const startWiki = async () => {
    
        await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            // Convertimos la respuesta de la API en un objeto JSON
            }).then(function(result) {
                const data = result;
                const champ = new Champ (data);
                pushChamp(champ);
            });
    

    await showPokedex();
};

// Esta función añade el Pokemon que se le pasa como parámetro al array
function pushChamp(pokemon) {
    pokemons.push(pokemon);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showPokedex = async () => {
    // Se obtiene una referencia al elemento con el ID pokedex en el DOM donde se insertarán las tarjetas de los Pokemon.
    const pokedex = document.getElementById("pokedex");
    // Iteramos sobre cada elemento del array pokemons
    for(var i = 0; i < pokemons.length; i++) {
        var aux =  0;
        while (aux != pokemons[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = pokemons[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = pokemons[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++; 
        }
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        pokedex.innerHTML +=    `<div class="card">
                                    <img src="${pokemons[i].pkm_back}">
                                    <img class="front" src="${pokemons[i].pkm_front}"><br>
                                    ${pokemons[i].id}. ${pokemons[i].name}<br>
                                    <div class="types">
                                        ${tipo1} ${tipo2}
                                    </div>
                                    <div class="height">
                                        ${pokemons[i].height/10} m
                                    </div>
                                    <div class="weight">
                                        ${pokemons[i].weight/10} kg
                                    </div>
                                </div>`
    }
}
