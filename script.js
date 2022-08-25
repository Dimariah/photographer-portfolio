const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.drop-down');

let display = 'none'

menu.addEventListener('click', () => {
	if (display === 'none') {
		dropdown.style.display = 'none';
		display = 'flex';
	}else {
		dropdown.style.display = 'flex';
		display = 'none'
	}
})