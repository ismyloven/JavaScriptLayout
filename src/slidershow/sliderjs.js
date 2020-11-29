let viewport = document.querySelector(".viewport").offsetWidth;
let btnNext = document.querySelector(".next");
let btnPrev = document.querySelector(".prev");
let slider = document.querySelector(".newslider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[0].style.backgroundColor = "pink";

let startSlide = setInterval(nextSlid, 2000);

btnNext.addEventListener("click", nextSlid);

	function nextSlid () {

	viewSliders[viewSlide].style.backgroundColor = "yellow";
	if (viewSlide < 3) {
		viewSlide++;
	} else {
		viewSlide = 0;
	}
	viewSliders[viewSlide].style.backgroundColor = "pink";
	slider.style.left = -viewSlide * viewport + "px";
}

btnPrev.addEventListener("click", prevSlid);
	function prevSlid () {
	viewSliders[viewSlide].style.backgroundColor = "yellow";
	if (viewSlide > 0) {
		viewSlide--;
	} else {
		viewSlide = 3;
	}
	viewSliders[viewSlide].style.backgroundColor = "pink";
	slider.style.left = -viewSlide * viewport + "px";
}


slider.addEventListener("mouseover", stopWorkSlide);
slider.addEventListener("mouseout", startWorkslide);

function stopWorkSlide() {
	startSlide = clearInterval(startSlide);
}

function startWorkslide() {
	startSlide = setInterval(nextSlid, 2000);
}




let fourthcliker = document.querySelector(".fourthcliker");
let hidenslidertext = document.querySelector(".hidenslidertext");


fourthcliker.addEventListener("click", handlerSlider);



function handlerSlider() {

	if (hidenslidertext.style.display == "block") {
		hidenslidertext.style.display = "none";


	} else {
		hidenslidertext.style.display = "block";
		startSlide = setInterval(nextSlid, 2000);
	}
}
