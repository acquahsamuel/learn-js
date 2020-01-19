const forms = document.querySelector('.signup-form');
const username = document.getElementById('username');

forms.addEventListener('click' , (event) =>{
    event.preventDefault();
    
    // Method 2 
    //console.log(username.value);
  
    // Method 2 
    console.log(forms.username.value);
});


// Regular Expression Pattern Checking
const usernameCheck = "shaunp";
const Pattern = /^[a-z]{6,}$/;


// let matchingUsernameANdPattern = Pattern.test(usernameCheck);
// console.log(matchingUsernameANdPattern);


let result = usernameCheck.search(Pattern);
if(result){
    console.log(result);
}else{
    console.log(result);
}
