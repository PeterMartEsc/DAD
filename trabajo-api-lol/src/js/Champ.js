export default class Champ {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {
        this.name = data.name;                            // Nombre del champ
        //this.title = data.title;                        // Título del champ
        //this.id = data.id;                              // Id del champ
        this.img = data.image.full;                     // Champ entero
        //this.champ_resource = data.partype;             // Tipo del recurso para usar habilidades
        //this.champ_types = data.tags;                   // Tipos del champ  
    }
}