let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let timer = document.querySelector('.thedate');
let timerScreen = document.querySelector('.timer');


function sayTime() {
	let date = new Date;

	let hoursScreen = date.getHours();

	if (hoursScreen < 10) {
		hoursScreen = '0' + date.getHours();
	} else {
		hoursScreen = date.getHours();
	}


	let minutesScreen = date.getMinutes();

	if (minutesScreen < 10) {
		minutesScreen = '0' + date.getMinutes();
	} else {
		minutesScreen = date.getMinutes();
	}

	let secondsScreen = date.getSeconds();

	if (secondsScreen < 10) {
		secondsScreen = '0' + date.getSeconds();
	} else {
		secondsScreen = date.getSeconds();
	}


	if (start) {
		hours.innerHTML = hoursScreen;
		minutes.innerHTML = minutesScreen;
		seconds.innerHTML = secondsScreen;
		start = false;
	}


	if (secondsScreen === 60) {
		hours.innerHTML = hoursScreen;
		minutes.innerHTML = minutesScreen;
		seconds.innerHTML = secondsScreen;
	}

	if (minutesScreen === 60) {
		hours.innerHTML = hoursScreen;
		minutes.innerHTML = minutesScreen;
		seconds.innerHTML = secondsScreen;
	}
	timerScreen.innerHTML = `${hoursScreen}:${minutesScreen}:${secondsScreen}`;
}

setInterval(sayTime, start = true, 1000);


let thedate = new Date();

function formatDate(date) {

	var day = date.getDate();
	if (day < 10) day = '0' + day;
	timer.children[0].innerHTML = day;

	var month = date.getMonth() + 1;
	if (month < 10) month = '0' + month;
	timer.children[1].innerHTML = month;

	var year = date.getFullYear() % 100;
	if (year < 10) year = '0' + year;
	timer.children[2].innerHTML = year;


}


formatDate(thedate);




