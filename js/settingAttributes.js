// Geting or setting 
// Reference to the element we want to change

const link = document.querySelector('a');
console.log(link.getAttribute('href'));

//Setting Attribute 

console.log(link.setAttribute('href' ,'https://www.speedcode.gh'));
link.innerText = 'speed coding';

const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

// these two are all Class Names
mssg.setAttribute('class' , 'success');

// setting color name
mssg.setAttribute('style' , 'color:green');


// Select the element first
const title  = document.querySelector('#page-title');
console.log(title.style);
console.log(title.style.color);


// In javascript CSS properties with - eg font-size
// The right shortCut is fontSize
title.style.margin = '50px';
title.style.FontFace = '2em';
title.style.textAlign = 'left';
title.style.fontWeight = 'bold';
title.style.textTransform = 'uppercase';

title.style.margin = '';




