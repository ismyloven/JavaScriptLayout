//
// const slider2 = document.querySelector(".slider2");
// const btnNext = document.getElementById("next");
// const btnPrev = document.getElementById("prev");
// let viewSlide = 0;
//
//
// const slider3 = document.querySelector(".slider3");
// const viewSliders2 = document.querySelectorAll(".viewSlide2");
// let viewSlide2 = 0;
//
//
// btnNext.addEventListener("click", handlerPrev);
//
// function  handlerPrev () {
//
//
// 	viewSliders2[viewSlide2].style.backgroundColor = "yellow";
//
// 	if (viewSlide < 3 && viewSlide2 < 3) {
//
// 		viewSlide++;
// 		viewSlide2++;
// 	} else {
//
// 		viewSlide = 0;
// 		viewSlide2 = 0;
// 	}
//
// 	viewSliders2[viewSlide2].style.backgroundColor = "pink";
// 	slider3.style.left = `${-viewSlide2 * 450 + "px"}`;
// 	slider2.style.left = `${-viewSlide * 450 + "px"}`;
// }
//
//
// btnPrev.addEventListener("click", handlerNext);
//
// function handlerNext () {
// 	viewSliders2[viewSlide2].style.backgroundColor = "yellow";
// 	if (viewSlide > 0 && viewSlide2 > 0) {
// 		viewSlide--;
// 		viewSlide2--;
// 	} else {
// 		viewSlide = 3;
// 		viewSlide2 =3;
// 	}
// 	viewSliders2[viewSlide2].style.backgroundColor = "pink";
// 	slider2.style.left = `${-viewSlide * 450 + "px"}`;
// 	slider3.style.left = `${-viewSlide2 * 450 + "px"}`;
// }
//
//
//
// setInterval(handlerPrev,2000);
//


const slider2 = document.querySelector(".slider2");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const viewSlide = 0;

const slider3 = document.querySelector(".slider3");
const viewSliders2 = document.querySelectorAll(".viewSlide2");
const viewSlide2 = 0;

var FirstSlider = class {
	constructor() {
	}

	handlerPrev () {



		if (viewSlide < 3) {
			viewSlide++;
		} else {
			viewSlide = 0;
		}
		slider2.style.left = `${-viewSlide * 450 + "px"}`;
	}
	handlerNext () {

		if (viewSlide > 0) {
			viewSlide--;
		} else {
			viewSlide = 3;
		}
		slider2.style.left = `${-viewSlide * 450 + "px"}`;
	}

}



class SecondSlider extends FirstSlider {
	constructor(){
		super();
	}

	handlerPrev () {
		viewSliders2[viewSlide2].style.backgroundColor = "yellow";

		if (viewSlide2 < 3) {

			viewSlide2++;
		} else {

			viewSlide2 = 0;
		}

		viewSliders2[viewSlide2].style.backgroundColor = "pink";
		slider3.style.left = `${-viewSlide2 * 450 + "px"}`;

	}
	handlerNext () {
		viewSliders2[viewSlide2].style.backgroundColor = "yellow";
		if (viewSlide2 > 0) {

			viewSlide2--;
		} else {

			viewSlide2 =3;
		}
		viewSliders2[viewSlide2].style.backgroundColor = "pink";
		slider3.style.left = `${-viewSlide2 * 450 + "px"}`;
	}

}

let firstSlide = new FirstSlider;
let secondSlide = new SecondSlider();

btnNext.addEventListener("click", firstSlide.handlerPrev());
btnPrev.addEventListener("click", firstSlide.handlerNext());

setInterval(firstSlide.handlerPrev(),2000);
setInterval(secondSlide.handlerPrev(),4000);

firstSlide.handlerPrev();
firstSlide.handlerNext();
secondSlide.handlerPrev();
secondSlide.handlerNext();





