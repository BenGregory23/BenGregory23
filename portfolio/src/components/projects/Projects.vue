<script setup>
import { ref } from 'vue'
import Project from './Project.vue'

import banner from '../../assets/banner.png'
import noice from '../../assets/noice.png'
import instind from '../../assets/instind.png'
import skop_API from '../../assets/SKOP_API.png'




</script>

<template>
    <div id="Projets" class="projects">
        <h2>Projects</h2>

        <div class="project-container">
            <Project name="Corn" :image="banner" link="https://github.com/sainteTrinity/Corn" />
            <Project name="Instind" :image="instind" link="https://www.instind.io/"/>
            <Project name="SKOP API" :image="skop_API" link="https://github.com/BenGregory23/SKOP-API"/>
            <Project name="Noice" :image="noice" link="https://rad-klepon-9a5a05.netlify.app/"/>
        </div>
      
    </div>
    
</template>

<style scoped>

    .projects {
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        height: 100%;
        min-height: 100vh;
        width: 100vw;
    

    }

    .project-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;    
        align-items: center;
        height: fit-content;
        
        width: 100vw;
        background-color: transparent;
    }

   

    h2 {
        background-color: black;
        width: max-content;
        color: white;
        padding: 10px;
    }
    
   
</style>