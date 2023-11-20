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
  
            <img :src="image"/>
     
            <div class="work-exp-text">
             
                <h3>
                    {{ name }}
                </h3>
                <h4>{{ company }}</h4>
                
                <p>{{ description }}</p>
            </div>

            <div class="period">
                {{ period }}
            </div> 
      
    </div>
</template>


<style scoped>
    .work-exp {
        position: relative;
        max-height: 400px;
   
        aspect-ratio: 1;
        margin: 1rem;
        border: 1px solid rgb(172, 172, 172);
        border-radius: 1rem;
    
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
    }

  

    .work-exp-text {
       
        display: flex;
        padding:  0rem 1rem;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 1rem;
        color : white;
        background: linear-gradient(to top, rgba(44, 41, 41, 0.594) , rgba(0, 0, 0, 0.034)70%);
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


</style>