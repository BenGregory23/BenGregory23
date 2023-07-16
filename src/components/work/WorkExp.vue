<script setup>

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
    <div class="work-exp">
       
            <div class="work-exp-image">
                <img :src="image"/>
            </div>
            <div class="work-exp-text">
                <h3>
                    {{ name }}
                
                </h3>
                <h4>{{ period }} • {{ company }}</h4>
                
                <p>{{ description }}</p>
            </div>
      
    </div>
</template>


<style scoped>
    .work-exp {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        justify-content: center;    
        align-items: center;
        height: fit-content;
        background-color: white;
        margin: 20px;
        max-height: 250px;
        max-width: 77vw;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

  

    .work-exp-image {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        height: 250px;
        width: 20%;
        max-width: 400px;
        background-size: cover;
       
        border-radius: 1px;
        transition: all 0.2s ease-in-out;
        
        background-color: white;
    }

    .work-exp-image img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 1px;
    }

  

    .work-exp-text {
  
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: flex-start;
        width: 80%;
        border-radius: 1px;
        transition: all 0.2s ease-in-out;
        padding: 1rem;
        margin: 10px;
        color : black;
    }

    .work-exp-text h3 {
       
        z-index: 1;
     
        width: max-content;
        color: black;
        margin-bottom: 0;
      
    }

    
    .work-exp-text h4 {
        margin: 0;
        padding: 0;
    }

    .work-exp-text p {
      
        margin-top: 1rem;
        font-weight: 300;
        text-align: left;
    }


    @media (max-width: 768px) {
        .work-exp {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: fit-content;
            max-height: max-content;
            max-width: 85vw;
            margin:1rem 0 ;
            padding: 1rem;
        }

        .work-exp-image {
            height: 100px;
            max-width: 40vw;
            border-radius: 0;
            margin: 0;
            padding: 0;
        }

        .work-exp-image img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            border-radius: 0;
        }

        .work-exp-text {
            height: fit-content;
            width: 100%;
            border-radius: 0;
            margin: 0;
           
        }

        .work-exp-text h3 {
            margin: 0;
            padding: 0;
            width: 100%;
            color: black;
        }

        .work-exp-text h4 {
            margin: 0;
            padding: 0;
        }

        .work-exp-text p {
            margin: 0;
            padding: 0;
            font-weight: 300;
            text-align: left;
        }
    }

</style>