<script setup>

import { ref } from 'vue'
import { BadgeInfo } from 'lucide-vue-next'

const workSearch = ref(false)

// start timer

setTimeout(() => {

    // get session storage
    const workSearchSession = sessionStorage.getItem('workSearch')
    if (workSearchSession === 'false') {
        return
    }
    workSearch.value = true
}, 2000)

if (window.innerWidth < 768) {
    workSearch.value = false
}

function closeWorkSearch() {
    workSearch.value = false

    // save in session storage 
    sessionStorage.setItem('workSearch', 'false')
}



</script>

<template>
    <div class="work-search" v-if="workSearch">
        <h2>Je suis à la recherche d'un poste de développeur </h2>
        <p>
            Je suis à la recherche d'un poste de développeur web ou fullstack dans les environs de Poitiers ou en télétravail.
            Je suis disponible à partir du 1er septembre 2023.
        </p>

        <p>
            Je suis ouvert à toutes les propositions, n'hésitez pas à me contacter.
            <br/>
            mail : bengregorygbr@gmail.com
            <br/>
            tel : 06 71 86 33 44 
        </p>

        <button @click="closeWorkSearch">Fermer</button>
        
        
    </div>

    <div class="work-search-icon" v-else="workSearch" @click="workSearch = true">
       
        <p>Je suis à la recherche d'un poste de développeur</p> 
       
       
    </div>    



</template>

<style scoped>

    .work-search {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 0 1rem;
        max-width: 100vw;
        width: 400px;
        height: 300px;
        z-index: 100;
        box-sizing: border-box;
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
        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .work-search h2 {
        font-size: 1rem;
    }

    .work-search p {
        font-size: 0.8rem;
        font-weight: 400;
     
        margin: 5px;
       
    }

    .work-search button {
        font-size: 1rem;
        font-weight: 700;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0;
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }

    .work-search-icon{
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        padding: 0 1rem;
        max-width: 100vw;
        width: fit-content;
        height: 50px;
        z-index: 100;
        box-sizing: border-box;
        background-color: #fff;
        color: #000;
        -webkit-box-shadow: 15px 15px 0px 1px rgba(0,0,0,1);
        -moz-box-shadow: 10px 15px 0px 1px rgba(0,0,0,1);
        box-shadow: 10px 10px 0px 1px rgba(0,0,0,1);
        border: 3px solid #000;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

  

    .work-search-icon:hover {
       
       
        -webkit-box-shadow: 15px 15px 0px 1px rgba(0,0,0,1);
        -moz-box-shadow: 15px 15px 0px 1px rgba(0,0,0,1);
        box-shadow: 15px 15px 0px 1px rgba(0,0,0,1);
    }


    @media (max-width: 768px) {
  

    .work-search {
        width: 80vw;
        height: fit-content;
        padding: 1rem;
    }

    .work-search-icon p {
        font-size: 0.8rem;
    }

    
   }
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}


</style>