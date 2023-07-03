<script setup>


</script>

<template>
    <div class="menu">
        <a href="#Ben"><li>Ben Gregory</li></a>
        <a href="#Projets"><li>Projets</li></a>
        <a href="#Experiences"><li>Expériences</li></a>
        <a href="#Competences"><li>Compétences</li></a>
        <a href="#Hobby"><li>Hobby</li></a>
    </div>


    <div class="mobile-menu">
        <a href="#Ben"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></a>
        <a href="#Projets"><li>Projets</li></a>
        
        <a href="#Experiences"><li>Expériences</li></a>
        <a href="#Competences"><li>Compétences</li></a>
        <a href="#Hobby"><li>Hobby</li></a>
    </div>




</template>

<style scoped>

    .menu{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: black;
        z-index: 100;
    }

    .menu a {
        text-decoration: none;
        margin : 10px;
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


    .mobile-menu {
        display: none;
    }

    @media (max-width: 768px) {
        .menu {
            display: none;
        }

        .mobile-menu {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100vw;
            overflow: hidden;
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: black;
            z-index: 100;
        }

        .mobile-menu a {
            text-decoration: none;
            margin : 10px;
        }

        .mobile-menu li {
            color: white;
            padding: 10px;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid white;
            list-style: none; 
        }

        .mobile-menu li:hover {
            background-color: white;
            color: black;
        }
    }



</style>