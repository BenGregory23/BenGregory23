<script setup>
import Skill from './Skill.vue'
</script>

<template>
    <div class="skills" id="Competences">
        <h2>Compétences</h2>



            <section>
                <h3> Stack Actuelle </h3>
                <p>
                    Voici les technologies que j'utilise actuellement dans mes projets et que j'ai utilisé dans mes précédentes expériences.

                </p>
                <div class="container">
                    
                  
                    <Skill skill="Javascript" skillLevel="80" tag="Avancé" />
                    <Skill skill="React" skillLevel="40" tag="Avancé" />
                    <Skill skill="NodeJS" skillLevel="55" tag="Avancé" />
                    <Skill skill="MongoDB" skillLevel="50" tag="Avancé" />
                    <Skill skill="React-Native" skillLevel="50" tag="Avancé" />
                    <Skill skill="Java" skillLevel="70" tag="Avancé" />

                </div>
            </section>

            <section>
                <h3> Autres </h3>
                <p>
                    J'ai également des connaissances dans d'autres langages et frameworks. 
                </p>
                <div class="container">
                    <Skill skill="MySQL" />
                    <Skill skill="Spring Boot" />
                    <Skill skill="Vue.js" />
                    <Skill skill="Express.js"  />
                    <Skill skill="Spring Boot"  />
                    <Skill skill="C#" />
                </div>
            </section>


            
        
       

      
  
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

    section {
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 20px;
        padding: 0 1rem;
        max-width: 100vw;
        width: fit-content;
        height: 300px;
        z-index: 100;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        -webkit-box-shadow: 18px 22px 0px 1px rgba(0,0,0,1);
        -moz-box-shadow: 18px 22px 0px 1px rgba(0,0,0,1);
        box-shadow: 18px 22px 0px 1px rgba(0,0,0,1);
        border: 5px solid #000;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
      
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 70vw;
        max-width: 80vw;
        height: 100%;
    }

    h2{
        background-color: black;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
    }

    h3{
        background-color: black;
        color: white;
        padding: 10px;
        margin-bottom: 0px;
    }

    

    

   
    

</style>