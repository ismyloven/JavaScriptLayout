let score = 0;
function nextSlide() {
	 (score < 3) ?score++ :score = 0;
	document.querySelector(".newslider").style.left = `${-score * 700 + "px"}`;
}
setInterval(nextSlide, 2000);

