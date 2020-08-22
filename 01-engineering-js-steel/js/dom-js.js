// Document Object model 
const h1 = document.createElement('h1');
h1.innerText = 'Hello word';
document.body.append(h1);

/* Generate a css Stylesheet
const createCSSSheet = new CSSStyleSheet();
createCSSSheet.replaceSync('* { transition : all 2s}');
*/

const getAllElement = document.body.children;
const createImage = document.createElement('img');

createImage.src = 'images/test.png';

const imageWidth = createImage.style.width = '60%';
const imageTransition = createImage.style.transition = 'all 3s';
document.body.append(createImage);

const getBrowserHight = document.body.clientHeight;
const getBrowserWidth = document.body.clientWidth;

setInterval(() =>{
    const x =   Math.floor(Math.random() * getBrowserWidth);
    const y =   Math.floor(Math.random() * getBrowserHight);
    // const rotation = Math.floor(Math.random() * 360); 
     el.style.transform = `translate(${x}px , ${y}px`;
   
}, 2000)


