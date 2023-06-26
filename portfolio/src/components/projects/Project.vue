<script setup>
import { ref } from 'vue'

// get project name and image link from props

defineProps({
    name: String,
    image: String,
    link: String
})





</script>


<template>
    <div class="project">
        <a :href="link" target="_blank">
            <h3>{{ name }}</h3>
             <img :src="image" alt="project image" />
        </a>
       
    </div>

</template>

<style scoped>
    .project {
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        height: 300px;
        width: 300px;
      
        border-radius: 1px;
        transition: all 0.2s ease-in-out;
        margin: 10px;
    }

    .project:hover {
        cursor: pointer;
        transform: scale(1.01);
       
    }

    .project h3 {
        position: relative;
        top:100%;
        z-index: 1;
        bottom: 0;
      
        left: 0;
        background-color: black;
        width: max-content;
        color: white;
        padding: 10px;
        margin: 0;
    }

    

    .project img, a {
        border-radius: 1px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
     
    }

    .project img {
       
        object-fit: cover;
    }

</style>
