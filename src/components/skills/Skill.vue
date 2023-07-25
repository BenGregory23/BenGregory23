<script setup>

import { ref } from 'vue'; 
const iconSize = ref(70)



defineProps({
    skill: String,
    link: String,
    alt: String
})

</script>


<template>
    <div class="skill">
        <img :width="iconSize" :height="iconSize" :src="link" :alt="alt" />

    </div>

</template>

<style scoped>
    .skill{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: fit-content;
        
        width:fit-content;
        margin:  10px;
        
    }

    .skill-tag{
        background-color: white;
        color: black;
        padding: 0 2px  ;
        border-radius: 5px;
        border : 1px solid black;
        font-size: 0.8rem;
        margin: 5px;
        
    }
    .skill h3{
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        font-weight: 300;
        color: black;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

  

    @media (max-width: 768px){

        .skill{
            width: 80%;

        }
    }



</style>