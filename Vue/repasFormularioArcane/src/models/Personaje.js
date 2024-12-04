class Personaje {

    constructor(nombre, origen,habilidades,aliados,mision) {
        this.nombre = nombre;
        this.origen = origen;
        this.habilidades = habilidades;
        this.aliados = aliados;
        this.mision = mision;
    }

    showInfo(){
        return `<div class="card">
                    <p><b>Nombre:</b> ${this.nombre}<br>
                    <p><b>Origen:</b> ${this.origen}</p><br>
                    <p><b>Habilidades:</b> ${this.aliados}</p><br>
                    <p><b>Mision:</b> ${this.mision}</p><br>
                </div>`
    }
}

export default Personaje;
