const gridItems = document.querySelectorAll('.grid .item');
const leftButton = document.querySelector('.leftButton');
const rightButton = document.querySelector('.rightButton');

let currentNodeIndex = 0;
rightButton.addEventListener('click',() => {
    gridItems[currentNodeIndex].classList.remove('move'); //should happen no matter what
    if(currentNodeIndex == gridItems.length-1){
        currentNodeIndex = -1;
    }
    gridItems[++currentNodeIndex].classList.add('move');
})

leftButton.addEventListener('click',() => {
    gridItems[currentNodeIndex].classList.remove('move'); //should happen no matter what
    if(currentNodeIndex == 0 ) {
        currentNodeIndex = gridItems.length;
    }
    gridItems[--currentNodeIndex].classList.add('move');
})