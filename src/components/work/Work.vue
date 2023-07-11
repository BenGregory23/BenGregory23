
<script setup>
import WorkExp from './WorkExp.vue'
import wemed from '../../assets/wemed.png'

</script>

<template>
  <div id="Experiences" class="work">

    <h2>Expériences professionnelle</h2>
    <div class="work-container">  
    <WorkExp 
        name="Développeur stagiaire"
        period="2022"
        company="WeMed"
        role="Développeur"
        description="I am currently working as a Software Engineer at Cerner. I am working on the Cerner Millennium platform, which is a healthcare platform used by hospitals and clinics. I am working on the backend of the platform, using Java and SQL to develop and maintain the platform."
        :image="wemed"
        />

        <WorkExp 
        name="Développeur alternant"
        period="2022 - Présent"
        company="Cerner"
        role="Software Engineer"
        description="I am currently working as a Software Engineer at Cerner. I am working on the Cerner Millennium platform, which is a healthcare platform used by hospitals and clinics. I am working on the backend of the platform, using Java and SQL to develop and maintain the platform."
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
        height: 100vh;
        min-height: 100%;
        width: 100%;
   
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
