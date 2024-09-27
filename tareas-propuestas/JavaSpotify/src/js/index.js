import songs from '../assets/songs/*.mp3';
import Player from './Player.js';

const map = { };

let aux = 1;

for (var key of Object.keys(songs)){
    map[`.item-${aux}`] = songs[key];
    aux++;
}

const player = new Player(map);