// Adding and removing Classes
// const content = document.querySelector('p');

console.log(content.classList)
// content.classList.add('error');
content.classList.remove('error')
// content.classList.add('success');
content.classList.remove('success')
content.classList.add('error')

// Chanllege solution
const content = document.querySelectorAll('p')

// you cant also use Content
content.forEach(cont => {
  if (cont.textContent.includes('error')) {
    cont.classList.add('error')
    cont.style.fontFamily = 'Tahoma'
  } else if (cont.innerText.includes('success')) {
    cont.classList.add('success')
  } else {
    cont.classList.add('')
  }
})

const title = document.querySelector('.title')
// Note the first one will add

title.classList.toggle('test')
// The second one will remove with the toggle class
title.classList.toggle('test')
