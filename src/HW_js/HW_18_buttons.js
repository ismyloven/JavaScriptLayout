let ton1 = document.getElementById('ton1');
let ton2 = document.getElementById('ton2');
let ton3 = document.getElementById('ton3');

function randColor() {
	return Math.floor(Math.random() * 255);
}

function handler(event) {
	var element = event.target;
	if (element.clicked) {
		event.target.style.background = ``;
		element.clicked = false;
	} else {
		event.target.style.background = `rgb(${randColor()},${randColor()},${randColor()})`;
		element.clicked = true;
	}
}

ton1.addEventListener('click', handler);
ton2.addEventListener('click', handler);
ton3.addEventListener('click', handler);








