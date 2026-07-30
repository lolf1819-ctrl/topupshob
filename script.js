const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(){

slides.forEach(s=>s.classList.remove("active"));

slides[current].classList.add("active");

current++;

if(current>=slides.length){

current=0;

}

}

setInterval(showSlide,3000);
