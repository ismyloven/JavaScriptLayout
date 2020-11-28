let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dots_item = document.querySelector(".slider-dots_item");


prev.addEventListener("click", minusSlide);
next.addEventListener("click", plusSlide);
dots_item.addEventListener("click", currentSlide);

let startStop = document.querySelector(".item");
startStop.addEventListener("mouseover", stopWorking);
startStop.addEventListener("mouseout", startWorking);

function stopWorking() {
	clearInterval(startSlide);
}
function startWorking() {
	startSlide = setInterval(plusSlide,2000);
}


// let slideText = document.querySelector(".slideText");
// slideText.addEventListener("mouseover", textHandler);
// function textHandler(event){
// 	slideText.classList.toggle("mouseText");
// }


var slideIndex = 1;
showSlides(slideIndex);
var startSlide = setInterval(plusSlide,2000);

function currentSlide(n) {
	showSlides(slideIndex = n);
	startSlide = setInterval(plusSlide,2000);
}
function plusSlide() {
	showSlides(slideIndex += 1);

}

function minusSlide() {
	showSlides(slideIndex -= 1);
}

function showSlides(n) {
	var slides = document.getElementsByClassName("item");
	var dots = document.getElementsByClassName("slider-dots_item");
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

