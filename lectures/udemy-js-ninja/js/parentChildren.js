

const article = document.querySelector('article');

// Looping through the children and add a class to them
Array.from(article.children).forEach(child =>{
    child.classList.add('article-element');
});



const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.nextElementSibling);
console.log(title.children);
console.log(title.lang);

console.log(title.previousElementSibling);
console.log(title.previousSibling);
console.log(title.children.nextElementSibling);


