

<script setup>
import { onMounted } from 'vue';
import { ChevronDown } from 'lucide-vue-next';

onMounted(() => {



    // Get the two texts to morph between.
const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"Ben",
    "GREGORY",
    "Développeur",
    "Fullstack",
    "Junior",
  
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();




})

function scrollDown() {
   
	
}

</script>


<template>
  <div class="morph">

 

<!-- The two texts -->
<div id="container">
	<span id="text1"></span>
	<span id="text2"></span>
</div>


<!-- The SVG filter used to create the merging effect -->
<svg id="filters">
	<defs>
		<filter id="threshold">
			<!-- Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. -->
			<feColorMatrix in="SourceGraphic"
					type="matrix"
					values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
		</filter>
	</defs>
</svg>


	<a id="down"  href="#About">
    	<ChevronDown Color="black"   />
	</a>



</div>
</template>



<style scoped>
/* Explanation in JS tab */

/* Cool font from Google Fonts! */
@import url('https://fonts.googleapis.com/css?family=Raleway:900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:wght@700&display=swap');
.morph {
	scroll-snap-align: start;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#down{
    position: absolute;
    color:black;
    bottom: 5rem;
    background-color: transparent;
    border: none;
	transition: 0.2s;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

#down:hover{
	color: #fffefe;
	transform: scale(1.2);
	background-color: black;
	border-radius: 50%;

}

#down:focus{
	outline: none;
}






#container {
    background-color:green;
	/* Center the text in the viewport. */
	position: absolute;


    display: flex;
    justify-content: center;
    align-items: center;

    
	/* This filter is a lot of the magic, try commenting it out to see how the morphing works! */
	filter: url(#threshold) blur(0.6px);
}

/* Your average text styling */
#text1, #text2 {
    background-color: red;
    position: absolute;
    left: 80%;

	width: 100%;
	display: inline-block;
    display: flex;
    justify-content: center;
	
	font-family: 'Old Standard TT', serif;
	font-size: 80pt;
	
	text-align: center;
    color: black;
	user-select: none;
}




@media screen and (max-width: 600px) {
	#text1, #text2 {
		font-size: 40pt;
	}

	
}
</style>