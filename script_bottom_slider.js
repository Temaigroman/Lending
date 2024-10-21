 document.addEventListener('DOMContentLoaded', () => {
    const bottom = document.getElementById('bottom');
    const circles = Array.from(bottom.getElementsByClassName('pagination-circle'));
    const leftArrow = document.querySelector('.bottom_arrow-left');
    const rightArrow = document.querySelector('.bottom_arrow-right');
    const visibleCount = 4; // Количество видимых элементов
    let currentIndex = 0; // Индекс первого видимого элемента

    function updatePosition() {
        const offset = currentIndex * 110; // 100px ширина + 10px отступ
        bottom.style.transform = `translateX(-${offset}px)`;
    }

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePosition();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < circles.length - visibleCount) {
            currentIndex++;
            updatePosition();
        }
    });

    // Инициализация
    updatePosition();
});
 


