const track = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-arrow.left');
const nextButton = document.querySelector('.carousel-arrow.right');
const dots = document.querySelectorAll('.carousel-dot');
let currentIndex = 0;

const updateCarousel = () => {
    const itemWidth = track.querySelector('.carousel-item').clientWidth;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Moves carousel

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
};

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % track.children.length; // Move forward
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + track.children.length) % track.children.length; // Move backward
    updateCarousel();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Update carousel when the window is resized
window.addEventListener('resize', updateCarousel);

// Initialize the carousel when the page loads
window.addEventListener('load', updateCarousel);


