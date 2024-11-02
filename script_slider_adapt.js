
// Массивы с путями к изображениям
const smallImages = [
	'/assets/main_poster_mob1.png',
	'/assets/main_poster_mob2.png',
	'/assets/main_poster_mob1.png',
	'/assets/main_poster_mob2.png'
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

	if (windowWidth <= 500) {
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


document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("frame");
  const slider = document.getElementById("slider");
  const images = document.querySelectorAll(".slider-image");
  
  let currentIndex = 0;
  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID;

  // Функция для анимации перемещения слайдов
  function animate() {
    const nextFrame = requestAnimationFrame(animate);
    const move = currentTranslate - prevTranslate;
    if (move !== 0) {
      slider.style.transform = `translateX(${currentTranslate}px)`;
    }
    prevTranslate = currentTranslate;
    if (isDragging) cancelAnimationFrame(nextFrame);
  }

  // Функция для переключения слайдов
  function switchSlide(direction) {
    if (direction === "next") {
      currentIndex++;
      if (currentIndex > images.length - 1) currentIndex = 0;
    } else if (direction === "prev") {
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
    }
    currentTranslate = currentIndex * -frame.clientWidth;
    setSliderPosition();
  }

  // Функция для установки позиции слайдера
  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    prevTranslate = currentTranslate;
    animate();
  }

  // Обработка начала тача
  frame.addEventListener("touchstart", (e) => {
    isDragging = true;
    startPos = e.touches[0].clientX;
    prevTranslate = currentTranslate;
    cancelAnimationFrame(animationID);
  });

  // Обработка движения тача
  frame.addEventListener("touchmove", (e) => {
    isDragging = true;
    const currentPos = e.touches[0].clientX;
    currentTranslate = prevTranslate + (currentPos - startPos);
  });

  // Обработка конца тача
  frame.addEventListener("touchend", () => {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -50) {
      switchSlide("next");
    } else if (movedBy > 50) {
      switchSlide("prev");
    } else {
      setSliderPosition();
    }
  });

  // Начальная установка позиции слайдера
  setSliderPosition();
});