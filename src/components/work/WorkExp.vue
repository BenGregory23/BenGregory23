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
                <h3>{{ name }}</h3>
                <h4>{{ period }}</h4>
                <h4>{{ company }}</h4>
                <h4>{{ role }}</h4>
                <p>{{ description }}</p>
            </div>
      
    </div>
</template>


<style scoped>
    .work-exp {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;    
        align-items: center;
        height: fit-content;
        min-height: 400px;
        background-color: black;
        margin: 20px;

    }

  

    .work-exp-image {
        display: flex;
        flex-direction: column;
        justify-content: center;    
        align-items: center;
        height: 300px;
        width: 40%;
        border-radius: 1px;
        transition: all 0.2s ease-in-out;
        margin: 10px;
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
        align-items: center;
        height: 300px;
        width: 300px;
        border-radius: 1px;
        transition: all 0.2s ease-in-out;

        margin: 10px;
        color : white;
    }

    .work-exp-text h3 {
      
        top:100%;
        z-index: 1;
        
        background-color: white;
        width: max-content;
        color: black;
        padding: 10px;
    }

    
    .work-exp-text h4 {
        margin: 0;
        padding: 0;
    }

    .work-exp-text p {
        margin: 0;
        padding: 0;
        font-weight: 300;
    }

</style>