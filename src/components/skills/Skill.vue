<script setup>

defineProps({
    skill: String,
    skillLevel: Number,
    tag: String,
})

</script>


<template>
    <div class="skill">
        
        <h3>
            {{ skill }}
            <div class="skill-tag">
                {{ tag }}
            </div>
        </h3>
        
        <div class="skill-level">
            <div class="skill-level-bar" :style="{width: skillLevel + '%', backgroundColor: 'black' }"></div>
        </div>


    </div>

</template>

<style scoped>
    .skill{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: fit-content;
        
        width:30%;
        margin:  10px;
        
    }

    .skill-tag{
        background-color: white;
        color: black;
        padding: 0 2px  ;
        border-radius: 5px;
        border : 1px solid black;
        font-size: 0.8rem;
        margin: 5px;
        
    }
    .skill h3{
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        font-weight: 300;
        color: black;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .skill-level{
        width: 100%;
        height: 10px;
        background-color: #E0E0E0;
        
        margin-top: 10px;
    }

    .skill-level-bar{
        height: 100%;
        
    }

    @media (max-width: 768px){

        .skill{
            width: 80%;

        }
    }



</style>