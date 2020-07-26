const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamPattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit' , (event) =>{
    event.preventDefault();

    //Validation
    const username = form.username.value;
    
    if(usernamPattern.test(username)){
        feedback.textContent = 'Valid fields data';
    }else{
        feedback.textContent = 'Invalid must contain letters only & between 6 & 13';
    }

});


// Live typing feedack
form.username.addEventListener('keyup' , e =>{
    if(usernamPattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    }else{
        form.username.setAttribute('class' ,'error');
    }
});
