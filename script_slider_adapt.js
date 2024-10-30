// Массивы с путями к изображениям
const smallImages = [
	'assets/main_poster_mob1.png',
	'assets/main_poster_mob2.png',
	'assets/main_poster_mob1.png',
	'assets/main_poster_mob2.png'
];

const bigImages = [
	'/assets/main_poster.svg',
	'/assets/gallery1.svg',
	'/assets/main_poster.svg',
	'/assets/gallery1.svg'
];

// Функция для замены изображения
function setImageBasedOnScreenWidth() {
	const sliderImages = document.querySelectorAll('.slider-image');

	// Получаем текущую ширину окна браузера
	const windowWidth = window.innerWidth;

	if (windowWidth <= 360) {
			// Подставляем маленькие картинки
			sliderImages.forEach((img, index) => img.src = smallImages[index]);
	} else {
			// Подставляем большие картинки
			sliderImages.forEach((img, index) => img.src = bigImages[index]);
	}
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', setImageBasedOnScreenWidth);

// Обновляем изображение при изменении размеров окна
window.addEventListener('resize', setImageBasedOnScreenWidth);
