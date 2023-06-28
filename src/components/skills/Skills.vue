<script setup>
import Skill from './Skill.vue'
</script>

<template>
    <div class="skills" id="Competences">
        <h2>Compétences</h2>



            <h3>
            Web
            </h3>
       
       

        <div class="container">
            <Skill skill="HTML/CSS" skillLevel="90" tag="Avancé" />
            <Skill skill="Javascript" skillLevel="80" tag="Avancé" />
            <Skill skill="React.js" skillLevel="80" tag="Utilisé sur de multiple projets" />
            <Skill skill="Vue.js" skillLevel="40" tag="En cours d'apprentissage" />
        </div>
  
    </div>
</template>

<style scoped>
    .skills{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        min-height: 100vh;
        width: 100vw;
    }

    .skills h2{
        background-color: black;
        font-size: 1.5rem;
        margin: 0;
        padding: 10px;
        color: white;
    }

    .skills h3{
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        font-weight: 300;
        color: black;
    }

    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        
    }

   
    

</style>