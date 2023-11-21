<script setup>

import { defineProps, ref } from 'vue'

const toggle = ref(false)






defineProps(
    {
        name: String,
        period: String,
        description: String,
        company: String,
        role: String,
        image: String,
    }
)



</script>

<template>
    <div class="work-exp" >
  
            <img :src="image"/>
     
            <div class="work-exp-text">
              <div class="padding-wrapper">
                    <h3>
                        {{ name }}
                    </h3>
                    <h4>{{ company }}</h4>
                    
                    <p  id="test">{{ description }}</p>
                </div>
            </div>

            <div class="period">
                {{ period }}
            </div> 
      
    </div>
</template>


<style scoped>
    .work-exp {
        position: relative;
        height: 400px;
        width: 400px;
        margin: 0.7rem;
        border: 1px solid rgb(172, 172, 172);
        border-radius: 1rem;
        transition: 0.5s;
    }

    .work-exp:hover {
        cursor: pointer;
        width: 700px;
    }

    img {
        height: 100%;
        width: 100%;
        position: relative;
        top: 100;
        left: 0;
        object-fit: cover;
        border-radius: 1px;
        background-color: white;
        border-radius: 1rem;
        filter: sepia(0.1);
        transition: all 0.5s ease;
       
    }

  

    .work-exp-text {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 1rem;
        color : white;
        background: linear-gradient(to top, rgba(44, 41, 41, 0.733) , rgba(0, 0, 0, 0.034)70%);
      
    }

    .work-exp-text .padding-wrapper{
        padding: 1rem;
    }

    .work-exp-text h3 {
        z-index: 1;
        width: max-content;
        color: white;
        margin-bottom: 0;
        font-family: "Satoshi";
        font-size: 1.5rem;
        transition: all 0.5s ease;
        
    }

    .work-exp:hover .work-exp-text h3 {
        animation: scrollUp 0.7s ease;
    }

    
    .work-exp-text h4 {
        margin: 0;
        padding: 0;
        font-family: "Satoshi";
        font-size: 1.1rem;
        text-align: left;
        transition: all 0.5s ease;
    }

    .work-exp:hover .work-exp-text h4 {
        animation: scrollUp 0.7s ease;
    }

    .work-exp-text p {
        display: none; 
        width: 600px;
        font-weight: 400;
        text-align: left;
        font-family: "Satoshi";
        transition: all 0.5s ease;
        animation: scrollUp 0.7s ease;

        
    }

   
    .work-exp:hover .work-exp-text p {
        display: block;
    }

    @keyframes scrollUp {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0%);
        }
    }

 

    .period{
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Satoshi";
        font-size: 1rem;
        font-weight: 500;
        border-radius: 100px;
        background-color: rgb(112, 187, 95);
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        width: fit-content;
        padding: 0rem 1rem;
        margin: 0.5rem;
        height: 30px;
    }
    


   
    @media screen and (max-width: 768px) {
        
        .work-exp {
            
            height: 100%;
            aspect-ratio: 1;
            margin: 1rem;
            
        }

        img {
            height: 100%;
            width: 100%;
            position: relative;
            top: 0;
            left: 0;
            object-fit: cover;
            border-radius: 0;
            background-color: white;
            border-radius: 1rem;
            filter: sepia(0.1);
        }

        .work-exp-text {
            display: flex;
            padding: 0rem 1rem;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            position: absolute;
            top: 0;
            left: 0;
            
            border-radius: 1rem;
            color: white;
            
        }

        .work-exp-text h3 {
            z-index: 1;
            width: max-content;
            color: white;
            margin-bottom: 0;
            font-family: "Satoshi";
            font-size: 1.5rem;
        }

        .work-exp-text h4 {
            margin: 0;
            padding: 0;
            font-family: "Satoshi";
            font-size: 1.1rem;
        }

        .work-exp-text p {
            margin-top: 1rem;
            font-weight: 300;
            text-align: left;
        }

       

    }


</style>