<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Aumentar</button>
    <button @click="reduceCounter">Restar</button>
    <button @click="duplicate">Multiplicar</button>
    <button @click="restart">Reiniciar</button>
    <p>{{ message }}</p>
</template>

<script>
    import {defineComponent, ref} from 'vue';
    export default defineComponent({
        name: 'CounterExtendComposition',

        setup(){
            let counter = ref(0);
            let message = ref(" ");

            const addCounter = () => {

                if(counter.value === 10){
                    message.value = "¡El valor es alto!";
                } else {
                    message.value = " ";
                    counter.value++;
                }
            };

            const reduceCounter = () => {

                if(counter.value > 0){
                    message.value = " ";
                    counter.value--;
                } else {
                    message.value = "No se puede poner menos que 0";
                }

            };

            const duplicate = () => {
                if(counter.value * 2 <= 10){
                    message.value = " ";
                    counter.value=counter.value*2;
                } else {
                    message.value = "¡El valor sería alto!";
                }
            };

            const restart = () => {
                
                message.value = " ";
                counter.value=0;
            };

            return {
                counter,
                message,
                addCounter,
                reduceCounter,
                duplicate,
                restart
            };
        }
    })
</script>

<style >

</style>