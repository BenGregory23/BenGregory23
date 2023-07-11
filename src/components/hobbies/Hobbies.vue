<script setup>
import Hobby from './Hobby.vue'

</script>


<template>

    <div id="Hobby" class="hobbies">
        <h2>Hobby</h2>

        <div class="hobby-container">
            <Hobby title="Escalade" description="L'escalade de bloc est une discipline de l'escalade qui consiste à grimper sur des blocs de faible hauteur, sans utiliser de corde ni de baudrier." image="http://i.imgur.com/1aE1nMA.jpg"/>
            <Hobby title="Jeux vidéo" description="Le jeu vidéo est un jeu électronique doté d'une interface utilisateur permettant une interaction humaine ludique en générant un retour visuel sur un dispositif vidéo." image="http://i.imgur.com/1aE1nMA.jpg"/>
            <Hobby title="Formule 1" description="La Formule 1, communément abrégée en F1, est une discipline de sport automobile considérée comme la catégorie reine de ce sport." image="http://i.imgur.com/1aE1nMA.jpg"/>
            
        </div>
    </div>


</template>

<style scoped>

    .hobbies{
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        height: 100vh;
        min-height: 100vh;
        width: 100vw;
        padding: 10px;
        user-select: none;

    }

    .hobby-container{
        display: flex;
        flex-direction: row;
        justify-content: center;    
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px;
        user-select: none;
        background-color: transparent;
    }

    h2{
        background-color: black;
        font-size: 1.5rem;
        margin: 0;
        padding: 10px;
        color: white;
        width: fit-content;
    }

    @media screen and (max-width: 600px) {

        .hobbies{
            padding: 0;
            height: max-content;
            min-height: max-content;
        
        }

        .hobby-container{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            max-width: 100vw;
            padding: 0;
        }

        h2{
            font-size: 1.5rem;
        }




    }


</style>