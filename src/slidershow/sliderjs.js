


function Carousel(carousel) {
	let prev;
	let current;
	let next;

	const slides = carousel.querySelector('.slides');
	const prevButton = carousel.querySelector('.previousSlide');
	const nextButton = carousel.querySelector('.nextSlide');

	function startCarousel() {
		current = carousel.querySelector('.current') || slides.firstElementChild;
		prev = current.previousElementSibling || slides.lastElementChild;
		next = current.nextElementSibling || slides.firstElementChild;
	}

	function applyClasses() {
		current.classList.add('current');
		prev.classList.add('prev');
		next.classList.add('next');
	}

	function move(direction) {
		const classesToRemove = ['prev', 'current', 'next'];
		prev.classList.remove(...classesToRemove);
		current.classList.remove(...classesToRemove);
		next.classList.remove(...classesToRemove);
		if (direction === 'back') {
			[prev, current, next] = [
				prev.previousElementSibling || slides.lastElementChild,
				prev,
				current,
			];
		} else {
			[prev, current, next] = [
				current,
				next,
				next.nextElementSibling || slides.firstElementChild,
			];
		}

		applyClasses();
	}
	setInterval(move,2000);
	startCarousel();
	applyClasses();

	prevButton.addEventListener('click', () => move('back'));
	nextButton.addEventListener('click', move);
}

const myCarousel = Carousel(document.querySelector('.carousel'));





