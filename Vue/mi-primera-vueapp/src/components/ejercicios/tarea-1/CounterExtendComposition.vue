<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Aumentar</button>
    <button @click="reduceCounter">Restar</button>
    <button @click="duplicate">Multiplicar</button>
    <button @click="restart">Reiniciar</button>
    <p>{{ message }}</p>

    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Um_gOzpdXyl69bm03SggZQHaLH%26pid%3DApi%26h%3D160&f=1&ipt=41a5613563bd3eb25b4c6c1a64e4c40d5dabea770ebfd52629bb79772a34520f&ipo=images">
</template>

<script>
    import {defineComponent, ref} from 'vue';
    export default defineComponent({
        name: 'CounterExtendComposition',

        setup(){
            let counter = ref(0);
            let message = ref(" ");

            const addCounter = () => {

                if(counter.value >= 10){
                    message.value = "¡El valor es alto!";
                } else {
                    message.value = " ";
                }
                counter.value++;

            };

            const reduceCounter = () => {

                if(counter.value >= 10){
                    message.value = "¡El valor es alto!";
                } 
                
                if(counter.value > 0 && counter.value < 10){
                    message.value = " ";
                } else if(counter.value === 0){
                    message.value = "No se puede poner menos que 0";
                    return;
                }
                counter.value--;

            };

            const duplicate = () => {
                if(counter.value * 2 >= 10){
                    message.value = "¡El valor es alto!";
                } else {
                    message.value = " ";
                }

                counter.value=counter.value*2;
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