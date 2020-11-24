let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');

function randColor() {
	return Math.floor(Math.random() * 255);
}

function handler(event) {
	var element = event.target;
	if (element.clicked) {
		event.target.style.color = ``;
		element.clicked = false;
	} else {
		event.target.style.color = `rgb(${randColor()},${randColor()},${randColor()})`;
		element.clicked = true;
	}
}

button1.addEventListener('click', handler);
button2.addEventListener('click', handler);
button3.addEventListener('click', handler);

function remove() {
	button1.addEventListener('click', handler);
	button2.addEventListener('click', handler);
	button3.addEventListener('click', handler);

}

remove();