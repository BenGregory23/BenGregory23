
<script setup>
import WorkExp from './WorkExp.vue'
import wemed from '../../assets/wemed.png'

</script>

<template>
  <div id="Experiences" class="work">

    <h2>Expériences professionnelle</h2>
    <div class="work-container">  


        <WorkExp 
        name="DEVELOPPEUR FULLSTACK"
        period="Poste actuel"
        company="Groupe SII"
        role="Software Engineer"
        description="...TODO..." 
        image="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <WorkExp 
        name="DEVELOPPEUR FULLSTACK"
        period="2022 - 2023"
        company="WeMed"
        role="Software Engineer"
        description="Année d'alternance chez WeMed en tant que développeur fullstack. Je travaille sur le développement d'une application web de téléconsultation en Next JS." 
        image="https://cdn.pixabay.com/photo/2017/08/10/03/30/stethoscope-2617701_960_720.jpg"
        />

        <WorkExp 
            name="DEVELOPPEUR JAVASCRIPT"
            period="2022"
            company="WeMed"
            role="Développeur"
            description="J'ai effectué un stage de 4 mois chez WeMed en tant que développeur fullstack. J'ai travaillé sur le développement d'une librarie en Typescript permettant de mettre en place des téléconsultations en ligne. Cette librairie est disponbile sur npm (node package manager) sous le nom 'SKOP API'."
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.3dnatives.com%2Fwp-content%2Fuploads%2F2021%2F03%2FSkop.jpg&f=1&nofb=1&ipt=6c465d207493bea8d639993022b4bd90066d4e80153b5aca7406dd7c4f372ba4&ipo=images"
            />

       

        </div>

 
  </div>
</template>

<style scoped>
    .work{
        scroll-snap-align: start;
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
        flex-direction: row;
        flex-wrap: wrap;
        height: fit-content;
        max-width: 100vw;
        
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
