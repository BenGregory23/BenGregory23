<script setup>

</script>


<template>
  <div class="about">
    <p>
      Bienvenue sur mon site portfolio ! Je suis un développeur junior passionné de développement. Récemment diplômé d'une licence professionnelle de développement web, j'ai acquis une solide expérience grâce à mes études, stages et alternances. Je suis constamment motivé à apprendre de nouvelles technologies et à relever de nouveaux défis. Actuellement, je me perfectionne en Vue.js et en Go. Je suis également bilingue en anglais et en français. Explorez mes compétences et projets ici. Merci de votre visite !
    </p>
  </div>

</template>

<style scoped>
  .about {
 
    width: 60vw;
    color : black;

  }

  .about p {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300; 
   
  }

  @media (max-width: 768px) {
    .about {
      width: 100vw;
      padding: 20px;
      height:  fit-content;
    }

    .about p {
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: justify;
      padding: 20px;
    }
  }
</style>