
<script setup>
import WorkExp from './WorkExp.vue'

</script>

<template>
  <div id="Experiences" class="work">

    <h2>Expériences professionnelle</h2>
    <div class="work-container">  
    <WorkExp 
        name="Software Engineer"
        period="2021 - Present"
        company="Cerner"
        role="Software Engineer"
        description="I am currently working as a Software Engineer at Cerner. I am working on the Cerner Millennium platform, which is a healthcare platform used by hospitals and clinics. I am working on the backend of the platform, using Java and SQL to develop and maintain the platform."
        />

        <WorkExp 
        name="Software Engineer"
        period="2021 - Present"
        company="Cerner"
        role="Software Engineer"
        description="I am currently working as a Software Engineer at Cerner. I am working on the Cerner Millennium platform, which is a healthcare platform used by hospitals and clinics. I am working on the backend of the platform, using Java and SQL to develop and maintain the platform."
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
        width: 100%;
    }

    .work-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 100%;
        max-width: 100vw;
    }

    .work h2 {
        color: white;
        background-color: black;
        padding: 10px;
    }

</style>
