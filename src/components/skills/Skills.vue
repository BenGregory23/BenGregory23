<script setup>
import Skill from './Skill.vue'

</script>

<template>
    <div class="skills" id="Competences">
        <h2>Compétences</h2>



            <section>
                <h3> Langage </h3>
                <p>
                    J'ai une bonne connaissance des langages de programmation suivants.
                </p>
                <div class="container">
                    
                  
                    <Skill skill="Javascript" link="https://img.icons8.com/color/96/javascript--v1.png" />
                    <Skill skill="TypeScript" link="https://img.icons8.com/color/96/typescript.png" />
                    <Skill skill="Java" link="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" />
                    <Skill skill="Go" link="https://img.icons8.com/color/96/golang.png" />
                    <Skill skill="C#" link="https://img.icons8.com/color/96/c-sharp-logo-2.png" />
              
              

                </div>
            </section>

            <section>
                <h3> Frameworks </h3>
                <p>
                    J'ai une bonne connaissance des frameworks suivants.
                </p>
                <div class="container">
                    <Skill skill="React" link="https://img.icons8.com/color/96/react-native.png" />
                    <Skill skill="NextJs" link="https://img.icons8.com/color/96/nextjs.png"/>
                    <Skill skill="Vue.js" link="https://img.icons8.com/color/96/vue-js.png" />
                    <Skill skill="Node.js" link="https://img.icons8.com/color/96/nodejs.png" />
                    <Skill skill="Express.js"  link="https://img.icons8.com/color/96/express-js.png" />
                    <Skill skill="Spring Boot" link="https://img.icons8.com/color/96/spring-logo.png" />
                </div>
            </section>

            <section>
                <h3> Outils </h3>
                <p>
                    J'utilise également des outils pour faciliter le développement et le déploiement de mes projets.
                </p>
                <div class="container">
                    <Skill skill="WebPack" link="https://img.icons8.com/color/96/webpack.png" />
                    <Skill skill="Vite" link="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbranditechture.agency%2Fbrand-logos%2Fwp-content%2Fuploads%2Fwpdm-cache%2FVitejs-900x0.png&f=1&nofb=1&ipt=9dbb0521341fb99d017febd379727369c3d1e522a35990048db1c5b5d5275cc9&ipo=images" />
                    <Skill skill="Git" link="https://img.icons8.com/color/96/git.png" />
                    <Skill skill="Docker" link="https://img.icons8.com/color/96/docker.png" />
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
       
        margin: 2rem 0;
        width: 100vw;
    }

    section {
      
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 20px;
        max-width: 70vw;
        width: 70vw;
        padding: 0 16px;
        height: fit-content;
        z-index: 100;
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
        max-width: 70vw;
        height: 100%;
        padding: 20px;
    }

    h2{
        background-color: black;
        color: white;
        padding: 10px;
        margin-bottom: 20px;
        font-family: "Satoshi";
    }

    h3{
        background-color: black;
        color: white;
        padding: 10px;
        margin-bottom: 0px;
        font-family: "Satoshi";
    }

    @media (max-width: 768px){
        .skills{
            height: fit-content;
        }

        section{
            width: 85vw;
            margin: 15px;
            padding: 0 1rem;
            height: fit-content;
        }

        .container{
            width: 95vw;
            padding: 0 1rem;
            height: fit-content;
        }

        
    }
    

    

   
    

</style>