<script setup>

</script>


<template>
    <div class="footer">

        <div class="contact">


            <section>
                <a href="https://github.com/BenGregory23" target="_blank">
                   GitHub
                </a>

                <a href="https://github.com/BenGregory23" target="_blank">
                    LinkedIn
                </a>

                <a>
                    Instagram
                </a>

             

               

               
            </section>

            <section>
                <button>
                    Contact Me
                </button>


            </section>
        </div>


        <div class="right">
            <p>
                Ce site a été développé avec Vue.js.
            </p>
        </div>
        
       

        

    </div>

</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Rakkas');

    .footer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100vw;
        padding-bottom: 3rem;
        border-top: 1px solid black;
        background-color: white;
        height: 400px;
     
    }

    .contact {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        width: 70%;
        background-color: white;

        min-height: 5rem;

  
    }

    .contact section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        background-color: white;
        padding: 0 2rem;
    }

    .contact section h2 {
        
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .contact section input {
        width: 100%;
        height: 2rem;
        border: 1px solid black;
        border-radius: 5px;
        padding: 0 1rem;
        margin-bottom: 1rem;
    }

    .contact section input:focus {
        outline: none;
    }

    .contact section input::placeholder {
        
        font-size: 1rem;
    }

    .contact section a {
        margin: 0 1rem;
        color: black;
        font-weight: 300;
        font-size: 1.3rem;
    }

    .strikethrough {
        text-decoration: line-through;
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300px;
        width: 30%;
        background-color: white;
        
        border-left: 1px solid black;
        min-height: 5rem;
    }

    

    .right p {
        font-size: 1rem;
        color : rgb(0, 0, 0);
    }


    @media (max-width: 768px){
        .footer {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            padding-bottom: 3rem;
            border-top: 1px solid black;
            background-color: white;
            height: 400px;
            padding:2rem 0rem;
        }

        .contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            background-color: white;
            padding: 0 2rem;
        }

        .contact section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            background-color: white;
            padding: 0 2rem;
        }

        .contact section h2 {
            
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        .contact section input {
            width: 100%;
            height: 2rem;
            border: 1px solid black;
            border-radius: 5px;
            padding: 0 1rem;
            margin-bottom: 1rem;
        }

        .contact section input:focus {
            outline: none;
        }

        .contact section input::placeholder {
            
            font-size: 1rem;
        }

        .contact section a {
            margin: 0 1rem;
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 300px;
            width: 100%;
            background-color: white;
            
            border-left: 1px solid black;
            min-height: 5rem;
        }

        

        .right p {
            font-size: 1rem;
            color : rgb(0, 0, 0);
        }
        
    }



</style>