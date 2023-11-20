<script setup>
import Hobby from './Hobby.vue'

</script>


<template>

    <div id="Hobby" class="hobbies">
        <h2>Hobby</h2>

        <div class="hobby-container">
            <Hobby title="Escalade" description="L'escalade de bloc est une discipline de l'escalade qui consiste à grimper sur des blocs de faible hauteur, sans utiliser de corde ni de baudrier. Je fait régulièrement du bloc depuis bientôt un an." image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.listeadrenaline.com%2Fwp-content%2Fuploads%2F2020%2F10%2FCafe-Bloc-Montreal.png&f=1&nofb=1&ipt=a7498610573b73abac0925fecab2a8e09d6752dbe8f9b718a164d51958a8fb6b&ipo=images"/>
            <Hobby title="Jeux vidéo" description="Les jeux vidéo sont une source de détente pour moi et me permettent également de maintenir le contact avec des amis vivant dans d'autres villes ou pays." image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9753860.jpg&f=1&nofb=1&ipt=7dfef7cc8e78c3dfc921a78b514c52de3c0c2b91ad166f213ce66bbed580aa3f&ipo=images"/>
            <Hobby title="Formule 1" description="La Formule 1 est une discipline du sport automobile. Pendant le confinement, je suis devenu un passionné de ce sport et je prends plaisir à regarder les qualifications et les courses dès que j'en ai l'occasion." image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.programme.tv%2Fimgre%2Ffit%2F~2~program~e3346365f82e87aa.jpg%2F630x355%2Fquality%2F80%2Fformule-1-grand-prix-de-grande-bretagne.jpg&f=1&nofb=1&ipt=a69debb4bff7b0b006eb87cae6c710681932bb842a6b7b8677db0b09293c394d&ipo=images"/>
            
        </div>
    </div>


</template>

<style scoped>

    .hobbies{
        scroll-snap-align: start;
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
        font-family: "Satoshi";
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