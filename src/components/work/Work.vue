
<script setup>
import WorkExp from './WorkExp.vue'
import wemed from '../../assets/wemed.png'

</script>

<template>
  <div id="Experiences" class="work">

    <h2>Expériences professionnelle</h2>
    <div class="work-container">  


        <WorkExp 
        name="Développeur alternant"
        period="2022 - Présent"
        company="WeMed"
        role="Software Engineer"
        description="Je suis actuellement en alternance chez WeMed en tant que développeur fullstack. Je travaille sur le développement d'une application web de téléconsultation en Next JS." 
        :image="wemed"
        />

        <WorkExp 
            name="Développeur stagiaire"
            period="2022"
            company="WeMed"
            role="Développeur"
            description="J'ai effectué un stage de 4 mois chez WeMed en tant que développeur fullstack. J'ai travaillé sur le développement d'une librarie en Typescript permettant de mettre en place des téléconsultations en ligne. Cette librairie est disponbile sur npm (node package manager) sous le nom 'SKOP API'."
            :image="wemed"
            />

       

        </div>

 
  </div>
</template>

<style scoped>
    .work{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        min-height: 100vh;
        width: 100vw;
    }

    .work-container{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: fit-content;
        max-width: 90vw;
    }

    .work h2 {
        color: white;
        background-color: black;
        padding: 10px;
        font-family: "Satoshi";
    }

    @media (max-width: 768px) {
        .work {
            margin : 0px 0;
            padding: 0;
            height: max-content;
            min-height: max-content;
   
        }

        .work-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: fit-content;
            width: 100vw;
            background-color: transparent;
        }

        .work h2 {
            background-color: black;
        }
    }

</style>
