const colors = [
    'red',
    'orange',
    'yellow',
    'blue',
    'purple',
    'indigo',
    'violet',
];


const container = document.querySelector('.boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
}

