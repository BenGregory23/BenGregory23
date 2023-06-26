<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 500
  
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="header" :style="{ visibility: visible ? 'visible' : 'hidden',
    transition : 'all 0.2s ease-in-out',
}">
    <ul>
        <li><a href="#Ben">Ben Gregory</a></li>
        <li><a href="#Projets">Projets</a></li>
        <li><a href="#Experiences">Expériences</a></li>
        <li><a href="#Competences">Compétences</a></li>
        <li>Hobby</li>
    </ul>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0);
  width: 100vw;
  
  
  visibility: visible;

}

.header ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  list-style: none;
  padding: 0;
  margin: 0;
}

.header ul li {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 10px;
  margin: 0px 10px;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  font-weight: 300;
}

.header ul li:hover {
  cursor: pointer;
  background-color: white;
  color: black;
  transform: scale(1.01);
}

.header ul li:hover a {
    color: black;
}


</style>
