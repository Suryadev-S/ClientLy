const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');

prevButton.addEventListener('click',() => {
    slider.prepend(slider.lastElementChild);
});
 
nextButton.addEventListener('click',() => {
    slider.append(slider.firstElementChild);
})