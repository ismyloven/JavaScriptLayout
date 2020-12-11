const slider2 = document.querySelector(".slider2");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
let viewSlide = 0;
let startView;


const slider3 = document.querySelector(".slider3");
const viewSliders2 = document.querySelectorAll(".viewSlide2");
let viewSlide2 = 0;


var MainSlideShow = class {
	constructor() {
	}

	handlerPrev() {
		if (viewSlide < 3) {
			viewSlide++;

		} else {
			viewSlide = 0;

		}
		slider2.style.left = `${-viewSlide * 450 + "px"}`;

	}

	handlerNext() {

		if (viewSlide > 0) {
			viewSlide--;

		} else {
			viewSlide = 3;

		}
		slider2.style.left = `${-viewSlide * 450 + "px"}`;


	}
}

class FirstSliderCat extends MainSlideShow {
	constructor() {
		super();
	}

	sliderWork() {
		startView = setInterval(firstSlide.handlerPrev, 2000);
	}

	sliderStop() {
		clearTimeout(startView);
	}

}

let firstSlide = new FirstSliderCat();
startView = setInterval(firstSlide.handlerPrev, 2000);

btnNext.addEventListener("click", firstSlide.handlerPrev);
btnPrev.addEventListener("click", firstSlide.handlerNext);
slider2.addEventListener("mouseout", firstSlide.sliderWork);
slider2.addEventListener("mouseover", firstSlide.sliderStop);


class SecondSliderCat extends MainSlideShow {
	constructor() {
		super();
	}

	handlerPrev2() {
		viewSliders2[viewSlide2].style.backgroundColor = "yellow";

		if (viewSlide2 < 3) {

			viewSlide2++;
		} else {

			viewSlide2 = 0;
		}

		viewSliders2[viewSlide2].style.backgroundColor = "pink";
		slider3.style.left = `${-viewSlide2 * 450 + "px"}`;

	}

	handlerNext2() {
		viewSliders2[viewSlide2].style.backgroundColor = "yellow";
		if (viewSlide2 > 0) {

			viewSlide2--;
		} else {

			viewSlide2 = 3;
		}
		viewSliders2[viewSlide2].style.backgroundColor = "pink";
		slider3.style.left = `${-viewSlide2 * 450 + "px"}`;
	}

}


let secondSlide = new SecondSliderCat();

setInterval(secondSlide.handlerPrev2, 2000);

secondSlide.handlerPrev2();
secondSlide.handlerNext2();


//
// class SecondSliderCat extends MainSlideShow {
// 	constructor(){
// 		super();
// 	}
//
// 	handlerPrev () {
// 		viewSliders2[viewSlide2].style.backgroundColor = "yellow";
//
// 		if (viewSlide2 < 3) {
//
// 			viewSlide2++;
// 		} else {
//
// 			viewSlide2 = 0;
// 		}
//
// 		viewSliders2[viewSlide2].style.backgroundColor = "pink";
// 		slider2.style.left = `${-viewSlide2 * 450 + "px"}`;
//
// 	}
// 	handlerNext () {
// 		viewSliders2[viewSlide2].style.backgroundColor = "yellow";
// 		if (viewSlide2 > 0) {
//
// 			viewSlide2--;
// 		} else {
//
// 			viewSlide2 =3;
// 		}
// 		viewSliders2[viewSlide2].style.backgroundColor = "pink";
// 		slider2.style.left = `${-viewSlide2 * 450 + "px"}`;
// 	}
//
// }
//
//
// let secondSlide = new SecondSliderCat();
//
// setInterval(secondSlide.handlerPrev,2000);
//
// secondSlide.handlerPrev();
// secondSlide.handlerNext();


// var FirstSlider  = class {
// constructor() {
// }
//
// handlerPrev () {
// if (viewSlide < 3) {
// 		viewSlide++;
// 	} else {
// 		viewSlide = 0;
// 	}
// 	slider2.style.left = `${-viewSlide * 450 + "px"}`;
// }
// handlerNext () {
//
// 	if (viewSlide > 0) {
// 		viewSlide--;
// 	} else {
// 		viewSlide = 3;
// 	}
// 	slider2.style.left = `${-viewSlide * 450 + "px"}`;
// }
// 	sliderWork() {
// 		setInterval(firstSlide.handlerPrev,3000);
// 	}
// 	sliderStop() {
// 		clearTimeout(startView);
// 	}
//
// }
//
// let firstSlide = new MainSlider();
//
// firstSlide.handlerPrev();
// firstSlide.handlerNext();
// btnNext.addEventListener("click", firstSlide.handlerPrev);
// btnPrev.addEventListener("click", firstSlide.handlerNext);
//
//
// slider2.addEventListener("mouseout", firstSlide.sliderWork);
// slider2.addEventListener("mouseover", firstSlide.sliderStop);
//
//
// startView = setInterval(firstSlide.handlerPrev,3000);
//
//
// class SecondSlider extends FirstSlider {
// 	constructor(){
// 		super();
// 	}
//
// 	handlerPrev () {
// 		viewSliders2[viewSlide2].style.backgroundColor = "yellow";
//
// 		if (viewSlide2 < 3) {
//
// 			viewSlide2++;
// 		} else {
//
// 			viewSlide2 = 0;
// 		}
//
// 		viewSliders2[viewSlide2].style.backgroundColor = "pink";
// 		slider3.style.left = `${-viewSlide2 * 450 + "px"}`;
//
// 	}
// 	handlerNext () {
// 		viewSliders2[viewSlide2].style.backgroundColor = "yellow";
// 		if (viewSlide2 > 0) {
//
// 			viewSlide2--;
// 		} else {
//
// 			viewSlide2 =3;
// 		}
// 		viewSliders2[viewSlide2].style.backgroundColor = "pink";
// 		slider3.style.left = `${-viewSlide2 * 450 + "px"}`;
// 	}
//
// }
//
//
// let secondSlide = new SecondSlider();
//
// setInterval(secondSlide.handlerPrev,2000);
//
// secondSlide.handlerPrev();
// secondSlide.handlerNext();




