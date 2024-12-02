<template>
    <div class="formulario">
        <form>
            <input type="text" name="nombre" id="nombre">
            <input type="text" name="origen" id="origen">
            <input type="text" name="habilidad" id="habilidad">
            <input type="text" name="aliados" id="aliados">
            <input type="radio" name="mision-si" id="mision-no">
        </form>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    import Personaje from '../models/Personaje.js';
    export default defineComponent({
        name: 'FromArcane',

        data(){
            const personajeNuevo = new Personaje();
            return {
                personajeNuevo
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