let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots_item = document.querySelector(".slider-dots_item");
let startStop = document.querySelector(".item");

prev.addEventListener("click", minusSlide);
next.addEventListener("click", plusSlide);
dots_item.addEventListener("click", currentSlide);
startStop.addEventListener("mouseover", stopWorking);
startStop.addEventListener("mouseout", startWorking);


// let slideText = document.querySelector(".slideText");
// slideText.addEventListener("mouseover", textHandler);
// function textHandler(event){
// 	slideText.classList.toggle("mouseText");
// }


let slideIndex = 1;
let startSlide = setInterval(plusSlide, 2000);

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function plusSlide() {
	showSlides(slideIndex += 1);

}

function minusSlide() {
	showSlides(slideIndex -= 1);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("item");
	let dots = document.getElementsByClassName("slider-dots_item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");

	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

showSlides(slideIndex);


function stopWorking() {
	startSlide = clearInterval(startSlide);
}

function startWorking() {
	startSlide = setInterval(plusSlide, 2000);
}


let fourthcliker = document.querySelector(".fourthcliker");
let hidenslidertext = document.querySelector(".hidenslidertext");


fourthcliker.addEventListener("click", handlerSlider);

function handlerSlider() {

	if (hidenslidertext.style.display == "block") {
		hidenslidertext.style.display = "none";

	} else {
		hidenslidertext.style.display = "block";
	}
}

