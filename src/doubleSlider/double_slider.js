

let startView;
let dots = document.getElementsByClassName("viewSlide2");

const MainSlider = class  {

	constructor(element) {
		this.element = element;
		this.scoring = 0;
	}

	handlerNext() {

		(this.scoring < 3) ? this.scoring++ : this.scoring = 0;

		document.querySelector(this.element).style.left = `${-this.scoring * 450 + "px"}`;
	};

	handlerPrev() {

		(this.scoring > 0) ? this.scoring-- : this.scoring = 3;

		document.querySelector(this.element).style.left = `${-this.scoring * 450 + "px"}`;
	};

}

class FirstSlider extends MainSlider {

	constructor(element, nextBtn, prevBtn) {
		super(element);
		this.nextBtn = nextBtn;
		this.prevBtn = prevBtn;
	}

	buttonNext(nextBtn, element, scoring) {
		document.querySelector(this.nextBtn).addEventListener("click", () => this.handlerNext())
	};


	buttonPrev(prevBtn, element, scoring) {
		document.querySelector(this.prevBtn).addEventListener("click", () => this.handlerPrev())
	};

	sliderWork(element) {
		startView = setInterval(() => firstSlide.handlerNext(), 2000);
	}

	sliderStop(element) {
		clearTimeout(startView);
	}

}


class SecondSlider extends MainSlider {

	constructor(element) {
		super(element);

	}
	// showDots(element){
	// 	for (var i = 0; i < dots.length; i++) {
	// 		console.log(dots[i]);
	// 		dots[i] =  firstSlide.buttonNext();
	// 		console.log(firstSlide.buttonNext());
 	// }
	// }
}


let firstSlide = new FirstSlider(".slider2", ".next", ".prev");
let secondSlide = new SecondSlider(".slider3");
document.querySelector(".slider2").addEventListener("mouseout", firstSlide.sliderWork);
document.querySelector(".slider2").addEventListener("mouseover", firstSlide.sliderStop);
firstSlide.buttonNext();
firstSlide.buttonPrev();



startView = setInterval(() => firstSlide.handlerNext(), 2000);
setInterval(() => secondSlide.handlerNext(), 2000);


// dots.addEventListener("click", secondSlide.showDots());





// var slideIndex = 1;
// function showSlides(n) {
// 	var i;
// 	var slides = document.getElementsByClassName("test");
//     var dots = document.getElementsByClassName("viewSlide2");
//
//
// 	for (i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace("fon", "");
// 	}
// 	slides[slideIndex - 1].style.display = "block";
// 	dots[slideIndex - 1].className += " fon";
// }
// showSlides(4);


