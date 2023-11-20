<script setup>
import { ref } from 'vue'
import Project from './Project.vue'

import banner from '../../assets/banner.png'
import noice from '../../assets/noice.png'
import instind from '../../assets/instind.png'
import skop_API from '../../assets/SKOP_API.png'
import loleaf from '../../assets/loleaf.png'
import map_generator from '../../assets/Wave.png'




</script>

<template>
    <div id="Projets" class="projects">
        <h2>Projets</h2>

        <div class="project-container">
            <Project 
            name="Corn" 
            :image="banner" 
            source-code="https://github.com/sainteTrinity/Corn"
            description="Corn est une application mobile cross-platform qui permet de choisir les films que l'on souhaite voir avec des amis. L'application est développée en React Native et le backend est fait en Java Spring Boot avec une base de données MongoDB."
            />
            <Project 
            name="Instind" 
            :image="instind" 
            link="https://www.instind.io/"
            description="Instind est une plateforme de téléausculation que j'ai eu l'opportunité de développer en NextJS au sein d'une petite équipe chez WeMed. Cette plateforme permet aux médecins de réaliser des téléconsultations avec leurs patients tout en profitant d'outil connecté comme le SKOP grâce à la librarie 'SKOP API'."
            />
            <Project 
            name="SKOP API" 
            :image="skop_API" 
            source-code="https://github.com/BenGregory23/SKOP-API"
            link="https://halfred.wemed.fr/demo/"
            description="SKOP API est une librairie javascript qui fonctionne avec un stéthoscope connecté nommé le 'SKOP'. Elle permet d'améliorer les performances de ce dernier en ajoutant de la filtration audio et de la réalité augmentée."
            />
            <Project 
            name="Noice" 
            :image="noice" 
            link="https://rad-klepon-9a5a05.netlify.app/" 
            source-code="https://github.com/BenGregory23/noice"
            description="Noice une application web qui permet de lister les films que je souhaites voir. Mais aussi les restaurants ou bar que je veux essayer."
            />
            <Project 
            name="LoLeaf" 
            :image="loleaf" 
            link="https://flourishing-chebakia-bb4d05.netlify.app/" 
            source-code="https://github.com/BenGregory23/LoLeaf" 
            description="LoLeaf est une application web permettant d'écouter de la musique lofi/Jazz/Synthwave lorsque l'on code ou travaille. L'application est développée en React et utilise l'API de Youtube pour récupérer les musiques. Cela permet d'éviter les pubs et l'interface parfois trop chargée de Youtube."
            />

            <Project
            name="Map Generator"
            :image="map_generator"
            link="https://wave.bengregory.live"
            source-code="htts://github.com/BenGregory23/Wave"
            description="Map Generator est une application web permettant de générer des cartes 2D aléatoire en utilisant l'algoritme 'Wave Function Collapse'."
            />
          
          </div>
      
    </div>
    
</template>
<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 20px; /* Add padding to the projects container */
  box-sizing: border-box; /* Include padding in the total width */
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add gap between project components */
  width: 100%;
  max-width: 1200px; /* Set a max-width to limit the container size */
  margin-top: 20px; /* Add some space above the projects */
}

h2 {
  background-color: black;
  color: white;
  padding: 10px;
  margin-bottom: 20px;
  font-family: "Satoshi";
  font-weight: 700;
}

@media (max-width: 768px) {
  .project-container {
    align-items: flex-start; /* Align projects to the top on smaller screens */
  }
}
</style>

    