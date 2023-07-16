<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div>
    <div class="menu">
      <a href="#Ben"><li>Ben Gregory</li></a>
      <a href="#Projets"><li>Projets</li></a>
      <a href="#Experiences"><li>Expériences</li></a>
      <a href="#Competences"><li>Compétences</li></a>
      <a href="#Hobby"><li>Hobby</li></a>
    </div>

    <button class="hamburger" @click="toggleMobileMenu">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <transition name="slide" >
      <div class="mobile-menu" v-show="isMobileMenuOpen" @click="toggleMobileMenu">
        <a href="#Ben"><li>Ben Gregory</li></a>
        <a href="#Projets"><li>Projets</li></a>
        <a href="#Experiences"><li>Expériences</li></a>
        <a href="#Competences"><li>Compétences</li></a>
        <a href="#Hobby"><li>Hobby</li></a>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@700&display=swap');
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: black;
  z-index: 100;
  padding: 0;
}

.menu a {
  text-decoration: none;
  margin: 0 10px;
 
	
}

.menu li {
  color: white;
  padding: 10px;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid white;
  list-style: none;
}

.menu li:hover {
  background-color: white;
  color: black;
}

.hamburger {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 101;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: black;
  margin-bottom: 5px;
  transition: transform 0.3s ease-in-out;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
}

.mobile-menu li {
  color: black;
  padding: 10px;
  text-align: center;
  list-style: none;
  border-bottom: 1px solid white;
  font-size: 1.6rem;
  font-weight: 300;
  
}

.mobile-menu li:hover {
  background-color: rgb(175, 175, 175);
  color: black;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
}

@media (max-width: 768px) {
  .menu {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>
