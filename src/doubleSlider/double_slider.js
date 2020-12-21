//
//
// let dots = document.getElementsByClassName("viewSlide2");
//
// const MainSlider = class  {
//
// 	constructor(element) {
// 		this.element = element;
// 		this.scoring = 0;
// 	}
//
// 	handlerNext() {
//
// 		(this.scoring < 3) ? this.scoring++ : this.scoring = 0;
//
// 		document.querySelector(this.element).style.left = `${-this.scoring * 450 + "px"}`;
// 	};
//
// 	handlerPrev() {
//
// 		(this.scoring > 0) ? this.scoring-- : this.scoring = 3;
//
// 		document.querySelector(this.element).style.left = `${-this.scoring * 450 + "px"}`;
// 	};
// 	slideInterval(start){
// 		this.start = setInterval(() => this.handlerNext(), 2000);
// 	}
//
// }
//
// class FirstSlider extends MainSlider {
//
// 	constructor(element, nextBtn, prevBtn) {
// 		super(element);
// 		this.nextBtn = nextBtn;
// 		this.prevBtn = prevBtn;
// 	}
//
// 	buttonNext(nextBtn, element, scoring) {
// 		document.querySelector(this.nextBtn).addEventListener("click", () => this.handlerNext());
// 		document.querySelector(this.nextBtn).removeEventListener("click", () => this.handlerNext());
// 	};
//
// 	buttonPrev(prevBtn, element, scoring) {
// 		document.querySelector(this.prevBtn).addEventListener("click", () => this.handlerPrev());
// 		document.querySelector(this.prevBtn).removeEventListener("click", () => this.handlerPrev());
// 	};
//
// 	sliderWork(element) {
// 		document.querySelector(this.element).addEventListener("mouseout", () => this.slideInterval());
// 		document.querySelector(this.element).removeEventListener("mouseout", () => this.slideInterval());
// 	};
//
// 	sliderStop(element, start) {
// 		document.querySelector(this.element).addEventListener("mouseover", () => clearTimeout(this.start));
// 		document.querySelector(this.element).removeEventListener("mouseover", () => clearTimeout(this.start));
// 	};
//
// }
//
//
// class SecondSlider extends MainSlider {
//
// 	constructor(element) {
// 		super(element);
// 	}
//
//
// 	// showDots(element){
// 	// 	for (let i = 0; i < dots.length; i++) {
// 	// 		console.log(dots[i]);
// 	// 		// dots[i] = secondSlide.handlerNext();
// 	// 		// element.addEventListener("click", firstSlide.buttonNext());
//  	// }
// 	// }
//
//
// }
//
//
// let firstSlide = new FirstSlider(".slider2", ".next", ".prev");
// let secondSlide = new SecondSlider(".slider3");
//
// firstSlide.slideInterval();
// secondSlide.slideInterval();
//
//
//
// firstSlide.sliderWork();
// firstSlide.sliderStop();
// firstSlide.buttonNext();
// firstSlide.buttonPrev();
//
// //  secondSlide.showDots();
// // var slideIndex = 1;
// // function showSlides(n) {
// // 	var i;
// // 	var slides = document.getElementsByClassName("test");
// //     var dots = document.getElementsByClassName("viewSlide2");
// //
// //
// // 	for (i = 0; i < dots.length; i++) {
// // 		dots[i].className = dots[i].className.replace("fon", "");
// // 	}
// // 	slides[slideIndex - 1].style.display = "block";
// // 	dots[slideIndex - 1].className += " fon";
// // }
// // showSlides(4);
//
//
