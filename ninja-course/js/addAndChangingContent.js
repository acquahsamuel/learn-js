const para = document.querySelector('p')
const contents = document.querySelectorAll('.content')

console.log(para)

const allItems = document.querySelectorAll('p')
console.log(allItems)

allItems.forEach(itemp => {
  itemp.innerText = ' Code more you will get better at this Ok'
})

contents.forEach(insideContent => {
  insideContent.innerHTML += '<p> Hello i am sam </p>'
})

// Seting Attributes
const links = document.querySelector('a')

const newLink = links.getAttribute('href')
console.log(newLink)

const setLink = links.setAttribute('www.google.com', 'gmail.com')
// console.log(setLink);

// Setting Attributes
const h1Value = document.querySelector('#page-title')
h1Value.style.color = 'red'
h1Value.style.margin = '50px'
h1Value.style.borderLeft = '3px solid pink'

// Adding and removing classes from tags
const addingClass = document.querySelector('p')
addingClass.classList.add('success')
addingClass.classList.remove('error')



var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(typeof(pos));

console.log(pos);