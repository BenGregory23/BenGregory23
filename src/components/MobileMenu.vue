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
        <a href="#Ben"><li>Ben Gregory</li></a>
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
        padding: 0;
    }

    .menu a {
        text-decoration: none;
        margin : 0 10px;
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
            padding: 0;
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
            font-size: smaller;
        }

        .mobile-menu li:hover {
            background-color: white;
            color: black;
        }
    }



</style>