<template>
    <main class="fondo">
        <div class="container p-4">
            
            <!-- Bootstrap 5 switch
            <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="transparente" @change="transparentar">
                    <label class="form-check-label text-white" for="transparente">Transparentar</label>
            </div>-->

            <div class="formulario p-3 m-auto powderBlue">
                <form @submit.prevent="saveData">
                    <div class="row">
                        <div class="form-group col-6">
                            <label for="nombre" class="mb-2">Nombre</label>
                            <input type="text" class="form-control" id="nombre" placeholder="Shaco">
                        </div>
                        <div class="col-6">
                            <label for="origen" class="mb-2">Origen</label>
                            <select class="form-select" id="origen">
                                <option selected>Runaterra</option>
                                <option value="Piltover">Piltover</option>
                                <option value="Zaun">Zaun</option>
                                <option value="Aguas Estancadas">Aguas Estancadas</option>
                                <option value="Ciudad de Bandle">Ciudad de Bandle</option>
                                <option value="Demacia">Demacia</option>
                                <option value="El Vacio">El Vacio</option>
                                <option value="Freljord">Freljord</option>
                                <option value="Islas de las Sombras">Islas de las Sombras</option>
                                <option value="Ixtal">Ixtal</option>
                                <option value="Jonia">Jonia</option>
                                <option value="Noxus">Noxus</option>
                                <option value="Shurima">Shurima</option>
                                <option value="Targon">Targon</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="habilidad" class="mb-2">Habilidad Especial</label>
                        <input type="text" class="form-control" id="habilidad" placeholder="Cuerpo a cuerpo">
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="listaAliados" class="mb-2">Lista de Aliados</label>
                        <textarea class="form-control" id="listaAliados" rows="3" placeholder="Su clon :(" style="resize: none;"></textarea>
                    </div>
                    <br>
                    <div class="misionSiNo">
                        <input class="form-check-input" type="checkbox" id="misionSi" value=true>
                        <label class="form-check-label mx-2" for="misionSi">Misión Completada</label>
                    </div>
                    <br>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </form>
                <br>
            </div>

            <br>
            <br>

            <div class="tablaPersonajes m-auto pt-2">

                <table class="table table-striped table-bordered text-center">
                    <thead>
                        <tr class="table-info">
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Origen</th>
                            <th scope="col">Habilidad</th>
                            <th scope="col">Aliados</th>
                            <th scope="col">Mision Completada</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="tabla-personajes" v-for="(personaje, index) in arrayPersonajes" :key="index">
                            <th scope="row" v-html="index+1"></th>
                            <td v-html="personaje.nombre"></td>
                            <td v-html="personaje.origen"></td>
                            <td v-html="personaje.habilidades"></td>
                            <td v-html="personaje.aliados"></td>
                            <td v-html="personaje.mision"></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </main>
</template>

<script>
    import {defineComponent} from 'vue';
    //Imports de Bootstrap
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min.js';
    //Import de mi clase Personaje
    import Personaje from '../models/Personaje.js';
    export default defineComponent({
        name: 'FromArcane',

        data(){

            let personajeEjemplo = new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si");
            let arrayPersonajes = [
                new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si"), 
                new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si"),
                new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si"),
                new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si"),
                new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si")

            ];

            return {
                personajeEjemplo,
                arrayPersonajes,
            }
        },

        methods: {
            saveData() {
                
                let nombreGuardar = document.getElementById("nombre").value;
                let origenGuardar = document.getElementById("origen").value;
                let habilidadGuardar = document.getElementById("habilidad").value;
                let listaAliadosGuardar = document.getElementById("listaAliados").value;
                let misionSi = document.getElementById("misionSi").checked ? "Sí" : "No";

                if(nombreGuardar === "" || origenGuardar === "" || habilidadGuardar === "" || listaAliadosGuardar === ""){
                    alert("Rellene todos los campos para guardar");
                    return;
                }

                let personajeNuevo = new Personaje(
                    nombreGuardar,
                    origenGuardar,
                    habilidadGuardar,
                    listaAliadosGuardar,
                    misionSi,
                );

                // Agregar el personaje al array
                this.arrayPersonajes.push(personajeNuevo);

                // Vaciar el formulario
                document.getElementById("nombre").value = "";
                document.getElementById("origen").value = "";
                document.getElementById("habilidad").value = "";
                document.getElementById("listaAliados").value = "";
                document.getElementById("misionSi").checked = false;

                //console.log("Personaje agregado:", nuevoPersonaje);
            },

            transparentar() {
                //alert("hey");
                let toggler = document.getElementById("transparente");

                if (toggler.checked) {
                    
                    //alert("hey");
                    //console.log("El switch está activado");
                    // Añade aquí la acción que quieras realizar al activarlo
                } else {
                    console.log("El switch está desactivado");
                    // Añade aquí la acción que quieras realizar al desactivarlo
                }
            }

        },
});
</script>

<style>
    .formulario{
        width: 600px;
        border: solid 2px, rgb(176,224,230);
        border-radius: 10px;
        
    }

    .tablaPersonajes{
        width: 800px;
    }

    .powderBlue{
        background-color: rgb(176,224,230, 0.7); /* Color powder blue, sale en google */
    }

    .fondo{
        background-image: url(../assets/fondo-3.jpg);
        background-position:  center; /*-300px*/
        background-size: cover; /* Escalar la imagen para cubrir toda la pantalla */
        /*height: 100vh; /* Asegura que el fondo cubra toda la altura del viewport */
    }

</style>