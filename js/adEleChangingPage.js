// Adding Element to page

const paragraph = document.querySelector('p');
console.log(paragraph);

const para = paragraph.innerText += ' I am appened lorem 1000';
console.log(para);

//Changing all Element Bouch
const paras = document.querySelectorAll('p');
paras.forEach(para =>{
    console.log(para);
    para.innerText += 'add me now ';
});

//innerHTML { = }  completly append the content
// innerHTML { += }  appends to the content
const content = document.querySelector('.content');
content.innerHTML = "<button class='btn btn-danger'> Login into Account </button>";

