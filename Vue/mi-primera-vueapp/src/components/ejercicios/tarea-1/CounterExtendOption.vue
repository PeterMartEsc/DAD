<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Aumentar</button>
    <button @click="reduceCounter">Restar</button>
    <button @click="duplicate">Multiplicar</button>
    <button @click="restart">Reiniciar</button>
    <p>{{ message }}</p>

    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yBdKVnu1093hDv502OTkCQHaIq%26pid%3DApi%26h%3D160&f=1&ipt=4fd07340f136e5413f6e7bd2b4b3c42558b24014792bf497b365d76c063435c3&ipo=images" alt="">
</template>

<script>
    import {defineComponent} from 'vue';
    export default defineComponent({
        name: 'CounterExtendOption',

        data(){
            let counter = 0;
            let message = " ";
            return {counter, message}
        },

        methods: {
            addCounter(){
                if(this.counter >= 10){
                    this.message = "¡El valor es alto!";
                } else {
                    this.message = " ";
                }
                this.counter++;

            },

            reduceCounter(){
                if(this.counter >= 10){
                    this.message = "¡El valor es alto!";
                } 
                
                if(this.counter > 0 && this.counter < 10){
                    this.message = " ";
                } else if(this.counter === 0){
                    this.message = "No se puede poner menos que 0";
                    return;
                }
                this.counter--;
            },

            duplicate(){
                if(this.counter * 2 >= 10){
                    this.message = "¡El valor es alto!";
                } else {
                    this.message = " ";
                }
                this.counter=this.counter*2;
            },

            restart(){
                this.message = " ";
                this.counter=0;
            }
        }
    })
</script>

<style >

</style>