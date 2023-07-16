<script setup>

defineProps(
    {
        title: String,
        description: String,
        image: String,
    }
)


</script>


<template>

    <div class="hobby">
        <div class="img-container">
            <img :src="image" alt="logo les petits débrouillards">
        </div>
        <div class="hobby-info">
            <h3>{{ title }}</h3>
       
            <p>  {{ description }}</p>
        </div>
       
    
    </div>



</template>

<style scoped>

    

    .hobby{
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        border-radius: 5px;
        user-select: none;
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        height: 450px;
        overflow: hidden;
    }

    .hobby-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-radius: 5px;
        user-select: none;
        background-color: white;
        height: 50%;
    }


    h3{
        height: 30%;
      
        width: 100%;
        display: flex;
        font-size: 1.5rem;
        margin: 0;
        margin-top: 20px;
        color: black;
        width: fit-content;

    }

    p{
        height: 70%;
        min-height: 70%;
        
        width: 100%;
        
        padding: 5px 10px;
        color: black;
        width: fit-content;
    }

    .img-container{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        background-position: center;
        background-size: cover;
        border-radius: 5px 5px 0 0 ;
        width: 300px;
        height: 100%;

        object-fit: cover;
      
        
    }






</style>