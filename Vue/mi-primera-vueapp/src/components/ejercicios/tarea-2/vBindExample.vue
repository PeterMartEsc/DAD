<template>
    <div class="contenedor">
        <div class="titulo">
            Ejemplo Directiva v-bind
        </div>
        <div v-bind:class="powder">
        </div>
    </div>
</template>

<script>
    import {defineComponent, setBlockTracking} from 'vue';
    export default defineComponent({
        name: "vBindExample",

        data() {
            return{
                vi: "cuadradito-violeta",
                powder: "cuadradito-azul"
            }
        }
    })
</script>

<style>

    .titulo{
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .cuadradito-violeta{

        width: 100px;
        height: 100px;
        background-color: rgb(199,21,133);
        border: 1px solid;
        margin: auto;
    }

    .cuadradito-azul{

        width: 100px;
        height: 100px;
        background-color: rgb(176,224,230);
        border: 1px solid;
        margin: auto;
    }


</style>