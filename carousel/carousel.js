const gridItems = document.querySelectorAll('.item');
const button = document.querySelector('button');

let currentNodeIndex = 0;
button.addEventListener('click',() => {
    gridItems[currentNodeIndex].classList.remove('move'); //should happen no matter what
    if(currentNodeIndex == gridItems.length-1){
        currentNodeIndex = -1;
    }
    gridItems[++currentNodeIndex].classList.add('move');
})