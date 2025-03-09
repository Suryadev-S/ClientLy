const grid = document.querySelector('.grid');
const gridItems = document.querySelectorAll('.grid .item');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 300; // Each item is 300px wide
    grid.style.transform = `translateX(${offset}px)`;
}

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % gridItems.length;
    updateCarousel();
});

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + gridItems.length) % gridItems.length;
    updateCarousel();
});
