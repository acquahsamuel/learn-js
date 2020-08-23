/*
const clickedMe = document.querySelector('.clickedMe');

clickedMe.addEventListener('click', function () {
  console.log('This clicked');
});

clickedMe.addEventListener('mouseover', function () {
   clickedMe.innerHTML = 'Click Me';
})

clickedMe.addEventListener('mouseout', function () {
    clickedMe.innerHTML = 'Mouse Out';
})

window.addEventListener('scroll', function () {
    console.log('Hi am Scrolling up and down');
})

 window.screen
 window.innerHeight
 window.innerScreen


*/


const button = document.querySelector('button');

button.addEventListener('mouseover', function () {
 
    const getWidth = Math.floor(Math.random() * window.innerWidth);
    const getHeight = Math.floor(Math.random() * window.innerHeight);

    button.style.left = `${getWidth}px`;
    button.style.top = `${getHeight}px`;
})

button.addEventListener('click', function () {
    button.innerText = 'You go it';
    document.body.style.backgroundColor = 'blue';
})