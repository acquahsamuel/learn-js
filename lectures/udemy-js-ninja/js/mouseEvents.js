const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('This content cannout be copied so please stop');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e);
    box.textContent = `x postion ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener('wheel' , e =>{
    console.log(e.pageX , e.pageY);
});