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
        width: 320px;
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
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        border-radius: 5px;
        user-select: none;
        background-color: white;
        height: 50%;
       
    }


    h3{
       
        
        width: 100%;
        display: flex;
        font-size: 1.5rem;
        margin: 0;
        margin-top: 20px;
        color: black;
        width: fit-content;
        font-family: "Satoshi";
    }

    p{
        text-align: justify;
        width: 100%;
        padding: 0px 1rem;
        color: black;
        width: fit-content;
        margin: 0.3rem 0;
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
        width: 100%;
        height: 100%;
        object-fit: cover;
    }






</style>