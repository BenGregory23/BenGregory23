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
        <img src="http://i.imgur.com/1aE1nMA.jpg" alt="logo les petits débrouillards">
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
        height: 20%;
        padding-top: 20px;
        width: 100%;
        display: flex;
        font-size: 1.5rem;
        margin: 0;
        color: black;
        width: fit-content;
    }

    p{
        height: 80%;
        padding: 10px;
        color: black;
        width: fit-content;
    }

    img {
        background-position: center;
        background-size: cover;
        border-radius: 5px 5px 0 0 ;
        width: 100%;
        height: 50%;
    }





</style>