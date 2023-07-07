<script setup>
import { ref } from 'vue'
import About from './About.vue'
import Morphing from './Morphing.vue';


function scrollDown() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}

</script>

<template>
    <div id="Ben" class="hero">
       
       
        <About />

      

    </div>
    
</template>

<style scoped>
    .hero{
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        height: 100%;
        min-height: 100vh;
        width: 100vw;
        padding: 10px;
        user-select: none;
        background-color: transparent;
    }

    h1 {
        background-color: black;
        width: max-content;
        color: white;
        padding: 10px;
    }
</style>