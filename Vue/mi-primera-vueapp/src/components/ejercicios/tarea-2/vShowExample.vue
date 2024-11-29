<template>
    <div class="contenedor-principal">
        <div class="titulo">
            <h4>Ejemplo directiva v-show</h4>
        </div>
        <div>
            <div class="ejecutado" v-show="ejecutado">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28xe8vt774jo5.cloudfront.net%2Fchampion-abilities%2F0555%2Fability_0555_R1.jpg&f=1&nofb=1&ipt=76b98a422e1efd5b1c5088b8d6bb376eb6002c6017c02eede7dbbb1d12818432&ipo=images" 
                alt="ejecutado" width="500px"/>
            </div>
            <div class="no-ejecutado" v-show="noEjecutado">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd28xe8vt774jo5.cloudfront.net%2Fchampion-abilities%2F0555%2Fability_0555_W1.jpg&f=1&nofb=1&ipt=25efec125a8b02e1118013c52193448077e254dffaee32f8a64c0e48394cc51f&ipo=images" 
                alt="no-ejecutado" width="500px"/>
            </div>
        </div>
        <div class="botones">
            <button @click="ejecutar">La X marca el lugar</button>
            <button @click="ocultarse">Ocultarse</button>
        </div>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    export default defineComponent({
        name: "vShowExample",

        data() {
            let ejecutado = false;
            let noEjecutado = true;
            return {ejecutado, noEjecutado}
        },

        methods:{
            ejecutar() {
                this.ejecutado = true;
                this.noEjecutado = false;
            },
            ocultarse(){
                this.ejecutado = false;
                this.noEjecutado = true;
            }
        }
    })
</script>

<style>
    .titulo{
        text-align: center;
        margin-bottom: 20px;
    }

    img{
        display: block;
        margin:auto;
        margin-bottom: 20px;
    }

    .botones{
        display: flex;
        justify-content: center;
    }
</style>