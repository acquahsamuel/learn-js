const copy = document.querySelector('.copy-me');

copy.addEventListener('copy' , () =>{
    console.log("Copyright protected");
})


const box = document.querySelector('.box');
box.addEventListener('mousemove' , e =>{
    // console.log(Event.offsetX , Event.offsetY);
    box.textContent = ` x position -${e.offsetX} y pos -${e.offsetY} `;

});

document.addEventListener('wheel' , e =>{
    console.log(e.pageX , event.pageY);
});
