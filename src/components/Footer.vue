<script setup>

function mail() {
    window.open('mailto:bengregorygbr@gmail.com');
}
</script>


<template>
    <div class="footer">

        <div class="contact">


            <section>
                <a href="https://github.com/BenGregory23" target="_blank">
                   GitHub
                </a>

                <a href="https://www.linkedin.com/in/ben-gregory-a04471169" target="_blank">
                    LinkedIn
                </a>

                <a href="https://www.instagram.com/bengrgory/" target="_blank">
                    Instagram
                </a>

             

               

               
            </section>

            <section>
                <button @click="mail">
                    Contact Me
                </button>


            </section>
        </div>


        <div class="right">
            <p>
                Made with <span class="strikethrough">love</span> code.
            </p>

        </div>
        
       

        

    </div>

</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Rakkas');

    .footer{
        scroll-snap-align: start;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100vw;
        padding-bottom: 3rem;
        border-top: 1px solid black;
        background-color: white;
        height: 300px;
     
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
        height: 250px;
        width: 30%;
        background-color: white;
        border-left: 1px solid black;
        
    }

    

    .right p {
        font-size: 1.3rem;
        color : rgb(0, 0, 0);
        font-family: "Satoshi";
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
            height: fit-content;
            width: 100%;
            
            
           
            
        }

        

        .right p {
            font-size: 1rem;
            color : rgb(0, 0, 0);
        }
        
    }



</style>