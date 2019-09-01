const images = document.querySelectorAll('.slider-images .slider-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


function slider() {
    for (let i = 1; i < images.length; i++) {
        images[i].classList.add('opacity0');
    }
    images[currentSlide].classList.remove('opacity0');
}

function prevSlide() {
    if (currentSlide - 1 == -1) {
        currentSlide = images.length - 1;
    } else {
        currentSlide--;
    }
    slider();
}
function nextSlide() {
    if (currentSlide + 1 == images.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    slider();
}