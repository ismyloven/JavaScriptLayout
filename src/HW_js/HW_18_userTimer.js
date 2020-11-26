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

	}
}


function removeAll() {

	secundomer.removeEventListener("mouseover", listener, stop);
	secundomer.removeEventListener("mouseout", listener, start);
	document.removeEventListener('keydown', escButton);
	ton1.removeEventListener('click', handler);
	ton2.removeEventListener('click', handler);
	ton3.removeEventListener('click', handler);
	mybutton.removeEventListener("click", getHandler);
    button2.removeEventListener("click", handler2);
	button.removeEventListener("click", handler);
}


removeAll();


















