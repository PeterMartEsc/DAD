<template>
    <div class="formulario">
        <form>
            <input type="text" name="nombre" id="nombre">
            <input type="text" name="origen" id="origen">
            <input type="text" name="habilidad" id="habilidad">
            <input type="text" name="aliados" id="aliados">
            <input type="radio" name="mision-si" id="mision-si">
            <input type="radio" name="mision-no" id="mision-no">

        </form>
        {{ personajeNuevo.showInfo() }}
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    import Personaje from '../models/Personaje.js';
    export default defineComponent({
        name: 'FromArcane',

        data(){
            let personajeNuevo = new Personaje("nombre", "origen", "habilidad", "aliados", "mision-si");
            let arrayPersonajes = [];
            return {
                personajeNuevo, arrayPersonajes
            }
        },

        methods: {
            saveData(){
                
            }
        }
    })
</script>

<style>

</style>