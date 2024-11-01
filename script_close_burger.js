document.addEventListener('DOMContentLoaded', function() {
	let hamburger = document.querySelector('.nav-wrapper');
	
	if (hamburger) {
			hamburger.addEventListener('click', function() {
					let navElement = document.querySelector('.nav');
					
					if (navElement) {
							navElement.style.display = 'none';
					}
			});
	}
});
