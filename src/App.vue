<script setup>
import { ref } from 'vue'



import Hero from './components/Hero.vue'
import Projects from './components/projects/Projects.vue'
import MobileMenu from './components/MobileMenu.vue'
import Work from './components/work/Work.vue'
import Footer from './components/Footer.vue'
import Skills from './components/skills/Skills.vue'
import Morphing from './components/Morphing.vue'
import Hobbies from './components/hobbies/Hobbies.vue'
import WorkSearch from './components/WorkSearch.vue'

const mobileMenu = ref(false)

if (window.innerWidth < 768) {
  mobileMenu.value = true
}

</script>

<template>
  <div class="main">
    <Morphing/>
    <Hero/>
    <Projects/>
    <Work/>
    <Skills/>
    <Hobbies/>
    <Footer/>
    
  </div>
  <MobileMenu />

  <WorkSearch/>

</template>

<style scoped>
  .main {
    z-index: 100;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    max-width: 100vw;
  }

  @media (max-width: 768px) {
    .main {
      padding: 0;
      height: 90vh;
    }
  }

</style>
