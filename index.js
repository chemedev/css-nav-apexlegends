const navLinks = document.querySelectorAll('li');
const imgWrapper = document.querySelector('.img-wrapper');

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.forEach((link) => (link.className = 'show'));
		link.classList.add('active');
	});
});

let counter = 0, opacity = 0;
const time = setInterval(() => {
  //? Logo fade-in
	opacity += 0.2;
	imgWrapper.style.opacity = opacity;
  //? Links slide-in
	counter == navLinks.length - 1 && clearInterval(time);
	navLinks[counter].classList.add('show');
	counter++;
}, 200);
