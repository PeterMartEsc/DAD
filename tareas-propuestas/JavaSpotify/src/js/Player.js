import Song, { play_song } from './Song.js';

export default class Player{
    constructor(map){
        Object.entries(map);
        let aux = 1;
        for(var [key, value] of Object.entries(map)){
            let clave = key;
            let valor = value;
            let song = new Song(clave, valor);
            play_song(song);
            aux++
        }
    }
}