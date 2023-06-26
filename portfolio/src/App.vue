<script setup>

import Hero from './components/Hero.vue'

import Projects from './components/projects/Projects.vue'
import Header from './components/Header.vue'
import Work from './components/work/Work.vue'
</script>

<template>
  <div class="main">
    
    <Header/>
    <Hero/>

    <Projects/>

    <Work/>


    
  
  
 
  </div>

</template>

<style scoped>
  .main {
    z-index: 100;
    padding: 20;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100vw;
    min-height: 100vh;

  }

</style>
