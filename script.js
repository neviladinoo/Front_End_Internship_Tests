const track = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-arrow.left');
const nextButton = document.querySelector('.carousel-arrow.right');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

const updateCarousel = () => {
    const itemWidth = track.querySelector('.carousel-item').clientWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`; 

    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % track.children.length; 
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length; 
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});


window.addEventListener('resize', updateCarousel);


window.addEventListener('load', updateCarousel);


