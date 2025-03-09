const grid = document.querySelector('.grid');
const gridItems = document.querySelectorAll('.grid .item');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 300; // Move by one image width (300px)
    grid.style.transform = `translateX(${offset}px)`;
}

rightButton.addEventListener('click', () => {
    if (currentIndex < gridItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateCarousel();
});

leftButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = gridItems.length - 1; // Loop to the last image
    }
    updateCarousel();
});
