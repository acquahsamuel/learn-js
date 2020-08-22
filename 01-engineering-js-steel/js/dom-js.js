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
   for(let el of getAllElement){
    const x =   Math.floor(Math.random() * getBrowserWidth);
    const y =   Math.floor(Math.random() * getBrowserHight);
    const rotation = Math.floor(Math.random() * 360); 
     el.style.transform = `translate(${x}px , ${y}px `;
   }
}, 2000)


/* 

 Key things 
 Html Collections 

 Array can be iteratrated 
 Nodelist ()

 Array -like convert it to an array 
 Html Collection ()

 document.getElementsById
 document.getElementsByTagName
 document.getElementsByClssName

 Objects = 
 document.querySelector()
 document.querySelectorAll()


 innerTex and textContent
 ========================= 
 Kind of the Act the same 
 innerText 
 but textContent show the formatting and the hidden properties on the page


 innerHTMl 
 Return all the html tags along with it 
 eg. <p> Hello world  </p>
 

 */

 