// UserTimer


var count = 0;
var minuteuser = 0;
var hoursuser = 0;
var secundomer = document.querySelector(".usertime");
var counter = setInterval(userTimer, 1000);

function userTimer() {
	count++;
	if (count < 10) {
		count = "0" + count;
	}
	if (count > 60) {
		minuteuser++;
		if (minuteuser < 10) minuteuser = "0" + minuteuser;
		return count = 0;

	}

	if (minuteuser > 60) {

		hours++;
		if (hoursuser < 10) {
			hoursuser = "0" + hoursuser;
			return minuteuser = 0;
		}

	}
	secundomer.innerHTML = `${hoursuser}:${minuteuser}:${count}- времени на сайте`;

}

secundomer.addEventListener("mouseover", stop);
secundomer.addEventListener("mouseout", start);


function stop() {
	clearTimeout(counter);
}

function start() {
	counter = setInterval(userTimer, 1000);
}


document.addEventListener('keydown', escButton);

function escButton(event) {
	const key = event.key;
	if (key === "Escape") {
		// console.log("salam");
		count = 0;
		minuteuser = 0;
		hoursuser = 0;

	}
}
var weekcount;
let day = document.querySelector(".weekdaynumb");

var weekdate = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	weekcount = weekday[weekdate.getDay()];


day.innerHTML = weekcount;


//
// function removeAll() {
//
// 	secundomer.removeEventListener("mouseover", listener, stop);
// 	secundomer.removeEventListener("mouseout", listener, start);
// 	document.removeEventListener('keydown', escButton);
// 	ton1.removeEventListener('click', handler);
// 	ton2.removeEventListener('click', handler);
// 	ton3.removeEventListener('click', handler);
// 	mybutton.removeEventListener("click", getHandler);
//     button2.removeEventListener("click", handler2);
// 	button.removeEventListener("click", handler);
// 	fourthcliker.removeEventListener("click", handlerSlider);
// 	slider.removeEventListener("mouseover", stopWorkSlide);
// 	slider.removeEventListener("mouseout", startWorkslide);
//
// }
//
//
// removeAll();


















