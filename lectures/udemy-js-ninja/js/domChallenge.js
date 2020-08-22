// DOM Challenge

ptag = document.querySelectorAll('p');
ptag.forEach(pelements => {
  
    if(pelements.innerText.includes('error')){
        pelements.classList.add('error');
    }else{
        pelements.classList.add('success');
    }

});


// Toggling Class 

