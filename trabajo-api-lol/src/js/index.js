// Importamos la clase Pokemon desde el archivo Pokemon.js
import Champ from './Champ.js';

var champs = [];

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");

button.addEventListener("click", () => {

    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #wiki, y lo mostramos en pantalla
    document.querySelector('#wiki').style.visibility = 'visible';
    // LLamada a la función startwiki() que comenzará el proceso de mostrar los Pokemon
    startWiki();
});


const startWiki = async () => {
    
        await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            // Convertimos la respuesta de la API en un objeto JSON
            }).then(function(result) {
                for (let champion of result.data) {
                    let data = result.data[champion];
                    let champ = new Champ(data);
                    pushChamp(champ);
                }
            });
    

    await showWiki();
};

// Esta función añade el champ que se le pasa como parámetro al array
function pushChamp(champ) {
    champs.push(champ);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showWiki = async () => {
    // Se obtiene una referencia al elemento con el ID wiki en el DOM donde se insertarán las tarjetas de los Pokemon.
    const wiki = document.getElementById("wiki");
    // Iteramos sobre cada elemento del array champs
    for(var i = 0; i < champs.length; i++) {
        var aux =  0;
        while (aux != champs[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = champs[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = champs[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++; 
        }
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor wiki
        wiki.innerHTML +=    `<div class="card">
                                    <img src="${champs[i].img}">
                                    <img class="front" src="${champs[i].pkm_front}"><br>
                                    ${champs[i].id}. ${champs[i].name}<br>
                                    <div class="types">
                                        ${tipo1} ${tipo2}
                                    </div>
                                    <div class="height">
                                        ${champs[i].height/10} m
                                    </div>
                                    <div class="weight">
                                        ${champs[i].weight/10} kg
                                    </div>
                                </div>`
    }
}
