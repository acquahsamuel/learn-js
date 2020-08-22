const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const buttonClose = document.querySelector('.popup-close');

 
button.addEventListener('click', () => {
    popup.style.display = 'block';
});

buttonClose.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});