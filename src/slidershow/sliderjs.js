
const slider = document.querySelector(".newslider");
let score = 0;

function nextSlide() {

	if (score < 3) {
		score++;
	} else {
		score = 0;
	}

	slider.style.left = `${-score * 450 + "px"}`;
}

setInterval(nextSlide, 2000);

