const openBtn = document.querySelector('.openBtn');
const popup = document.querySelector('.popup-wrapper');
const popClose = document.querySelector('.popup-close');


openBtn.addEventListener('click' , () =>{
    popup.style.display = 'block'; 
});

popClose.addEventListener('click' , () =>{
    popup.style.display = 'none';
}); 

popup.addEventListener('click' , () =>{
    popup.style.display = 'none';
}); 