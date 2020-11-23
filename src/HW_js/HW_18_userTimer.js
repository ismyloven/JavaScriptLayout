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


	if (count > 60){
		minuteuser++;
		if (minuteuser < 10) minuteuser = "0" + minuteuser;
		return count =0;

	}

	if (minuteuser > 60){

		hours++;
		if (hoursuser < 10) {
			hoursuser = "0" + hoursuser;
			return minuteuser = 0;
		}

	} secundomer.innerHTML=`${hoursuser}:${minuteuser}:${count}- времени на сайте`;

}

secundomer.addEventListener("mouseover", stop);
secundomer.addEventListener("mouseout", start);


function stop (){
	clearTimeout(counter);
}

function start (){
	counter = setInterval(userTimer, 1000);
}


document.addEventListener('keydown', function(event) {
	const key = event.key;
	if (key === "Escape") {
		console.log("salam");

		count = 0;

	}
});


secundomer.removeEventListener("mouseover",listener, stop);
secundomer.removeEventListener("mouseout",listener, start);



















