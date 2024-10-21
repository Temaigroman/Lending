document.addEventListener('DOMContentLoaded', () => {
    const bottom = document.getElementById('bottom');
    const leftArrow = document.querySelector('.bottom_arrow-left');
    const rightArrow = document.querySelector('.bottom_arrow-right');
    const circles = Array.from(bottom.getElementsByClassName('pagination-circle')); // Преобразование в массив
    let currentIndex = 0; // Индекс первого видимого элемента
    const visibleCount = 4; // Количество видимых элементов
    const elementWidth = 275; // Ширина элемента
    const gap = 25; // Отступ между элементами

    function updatePosition() {
        const offset = currentIndex * (elementWidth + gap); // Учитываем ширину элемента и отступ

        circles.forEach((circle) => {
            // Применяем равномерное смещение ко всем элементам
            const translateX = -offset;
            circle.style.transform = `translateX(${translateX}px)`;
        });
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePosition(); // Обновление позиции при клике
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < circles.length - visibleCount) {
            currentIndex++;
            updatePosition(); // Обновление позиции при клике
        }
    });

    // Инициализация: начальные состояния без сдвига
    updatePosition(); // Убедитесь, что эта строка не вызывает смещения в начале
});
