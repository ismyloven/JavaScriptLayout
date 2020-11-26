
let viewport = document.getElementById("viewport").offsetWidth;

let btnNext = document.getElementById("next");

let btnPrev = document.getElementById("prev");

let slider = document.querySelector("div.slider");


let viewSlide = 0;


btnNext.addEventListener("click", handlerPrev);

function  handlerPrev () {

	if (viewSlide < 3) {
		viewSlide++;
	} else {

		viewSlide = 0;
	}

	slider.style.left = -viewSlide * viewport + "px";
}


// for second clicker (btnPrev)

btnPrev.addEventListener("click", handlerNext);

function handlerNext () {

	if (viewSlide > 1) {
		viewSlide--;
	} else {
		viewSlide = 3;
	}

	slider.style.left = -viewSlide * viewport + "px";
}



let fourthcliker = document.querySelector(".fourthcliker");
let hidenslidertext = document.querySelector(".hidenslidertext");


fourthcliker.addEventListener("click", getSliders);

function getSliders() {

	if (hidenslidertext.style.display == "block") {
		hidenslidertext.style.display = "none";

	} else {
		hidenslidertext.style.display = "block";
	}
}

setInterval(handlerPrev,2000);