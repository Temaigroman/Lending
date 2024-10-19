const slider = document.getElementById("slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");

let currentSlideIndex = 0;
const paginationCircles = [];
const sliderWidth = slider.clientWidth;
const images = [
    '../assets/gallery1_min.svg',
    '../assets/gallery2_min.svg',
    '../assets/gallery1_min.svg',
    '../assets/gallery1_min.svg',
];

function createPaginationCircle(index) {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    div.style.backgroundImage = `url(${images[index]})`; // Уникальное изображение для каждого div
    bottom.appendChild(div);
    paginationCircles.push(div);
}

// Измените вызов функции addPagination
function addPagination() {
    images.forEach((_, index) => createPaginationCircle(index)); // Передаем индекс в createPaginationCircle
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}


function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slider.style.transform = `translateX(-${currentSlideIndex * sliderWidth}px)`;
}

function changeSlide(slideIndex) {
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    if (newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPagination();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);