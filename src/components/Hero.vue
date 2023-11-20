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
        scroll-snap-align: start;
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

    @media (max-width: 768px) {
        .hero {
            padding: 0;
            height: max-content;
            min-height: 100vh;
            
        }

        h1 {
            font-size: 1.5rem;
        }
    }
</style>