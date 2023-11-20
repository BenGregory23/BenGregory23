<script setup>

</script>


<template>
  <div class="about" id="About">
    <p>
      Bienvenue sur mon portfolio ! Je suis un développeur junior passionné par le développement. Récemment diplômé d'une licence professionnelle en développement web, j'ai acquis une solide expérience grâce à mes études, mes stages et mes expériences en alternance. Je suis constamment motivé à apprendre de nouvelles technologies et à relever de nouveaux défis. Actuellement, je me concentre sur le perfectionnement de mes compétences en Vue.js et en Go. Je suis également bilingue en anglais et en français.
    <br/>
    <br/>
    <i>
      Explorez mes compétences et découvrez mes projets ici. Merci de votre visite et n'hésitez pas à me contacter pour toute question ou opportunité de collaboration !
    </i>
    </p>
</div>

</template>

<style scoped>
  .about {
    width: 50vw;
    height: 100vh;
    color : black;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .about p {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 300; 
   
  }

  @media (max-width: 768px) {
    .about {
      width: 95vw;
      padding: 0px;
      height:  fit-content;
    }

    .about p {
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: justify;
      padding: 10px;
    }
  }
</style>