<script setup>
import { ref } from 'vue'
import { ArrowUpRightSquare, Code } from 'lucide-vue-next';

// get project name and image link from props
defineProps({
    name: String,
    image: String,
    link: String,
    sourceCode: String,
    description: String
})

// default description
const defaultDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum!'


// show description on hover
const isHovered = ref(false)
const showDescription = () => {
    isHovered.value = true
}

const hideDescription = () => {
    isHovered.value = false
}

</script>

<template>
    <div class="project">
      <div class="project-card" @mouseover="showDescription" @mouseleave="hideDescription">
       
          <img :src="image" alt="project image" />
      
        <div class="description" v-show="isHovered">
            <h3 class="title">{{ name }}</h3>
          <p>{{ description }}</p>
          <div class="row">
            <p id="link" v-if="link" > <a :href="link" target="_blank"><ArrowUpRightSquare /></a></p>
            

            <p id="link" v-if="sourceCode"> <a :href="sourceCode" target="_blank"><Code /></a></p>
            
            
        
           </div>
         
        </div>

     
      </div>
  
   
    </div>
  </template>
  
  <style scoped>
  .project {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  
  .title {
    font-size: 1.5rem;
    margin: 20px 0;
    color: white;
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
  }
  
  .project-card {
    position: relative;
    width: 370px;
    height: 320px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .project-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
  
  .project-card img:hover {
    transform: scale(1.1);
  }
  
  .description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    animation: fadeIn 0.3s ease-in-out;

  }
  
  .description p {
    font-size: 0.9rem;
    color: white;
    padding: 0 12px ;
    text-align: center;
    transition: all 0.3s ease-in-out;
  }

    .description p a {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
  
  .project-card:hover .description {
    opacity: 1;
  }
  
  .project-info {
    margin: 20px 0;
    text-align: center;
  }
  
  .project-info h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
    }

    #link {
       margin: 5px;
    }
  
  @media (max-width: 768px) {

    .project {
      margin: 10px;
    }


    .project-card {
      width: 300px;
      height: 250px;
    }

    .description {
       
        font-size: 0.8rem;
    }
  }




  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(300px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
    
  }
  </style>
  