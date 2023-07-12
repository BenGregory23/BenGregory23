<script setup>
import Skill from './Skill.vue'
</script>

<template>
    <div class="skills" id="Competences">
        <h2>Compétences</h2>



            <section>
                <h3> Langage maîtrisés </h3>
                <div class="container">
                    
                    <Skill skill="HTML/CSS" skillLevel="90" tag="Avancé" />
                    <Skill skill="Javascript" skillLevel="80" tag="Avancé" />
                    <Skill skill="Java" skillLevel="70" tag="Avancé" />
                    <Skill skill="C#" skillLevel="60" tag="Avancé" />
                    <Skill skill="Python" skillLevel="40" tag="Avancé" />
                    <Skill skill="SQL" skillLevel="55" tag="Avancé" />

                </div>
            </section>

            <section>
                <h3> Web </h3>
                <div class="container">
                    
                    <Skill skill="React.js" skillLevel="80" tag="Utilisé sur de multiple projets" />
                    <Skill skill="Vue.js" skillLevel="40" tag="En cours d'apprentissage" />
                    <Skill skill="Node.js" skillLevel="40" tag="Bonne maîtrise" />
                    <Skill skill="Express.js" skillLevel="40" tag="Bonne maîtrise" />
                    <Skill skill="Spring Boot" skillLevel="60" tag="Bonne connaissance" />
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

    .skills h2{
        background-color: black;
        font-size: 1.5rem;
        margin: 0;
        padding: 10px;
        color: white;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
 
    }

    section h3{
        margin : 1rem;
        padding: 10px;
        text-decoration: underline;
        font-size: 1.5rem;
        text-align: left;
        align-self: flex-start;
 
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

    @media screen and (max-width: 768px) {

        .skills{
            padding: 0;
            height: max-content;
            min-height: max-content;
            
        }

        .container{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            max-width: 100vw;
            padding: 0;
        }

        section {
            width: 100%;
            
        }

        section h3{
            text-align: center;
            align-self: center;
        }
    }

   
    

</style>