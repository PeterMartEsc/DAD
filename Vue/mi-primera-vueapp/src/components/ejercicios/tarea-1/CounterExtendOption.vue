<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Aumentar</button>
    <button @click="reduceCounter">Restar</button>
    <button @click="duplicate">Multiplicar</button>
    <button @click="restart">Reiniciar</button>
    <p>{{ message }}</p>
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
                if(this.counter === 10){
                    this.message = "¡El valor es alto!";
                } else {
                    this.message = " ";
                    this.counter++;
                }
            },

            reduceCounter(){
                if(this.counter > 0){
                    this.message = " ";
                    this.counter--;
                } else {
                    this.message = "No se puede poner menos que 0";
                }
            },

            duplicate(){
                if(this.counter * 2 <= 10){
                    this.message = " ";
                    this.counter=this.counter*2;
                } else {
                    this.message = "¡El valor sería alto!";
                }
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