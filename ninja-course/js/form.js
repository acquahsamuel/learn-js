const form = document.querySelector('.signup-form');

form.addEventListener('click' , e =>{
    e.preventDefault(); //prevent autho page refresh
    console.log(form.username.value);


    // Regular Expression 
    const username = 'shaunp123';
    const pattern  = /^[a-zA-Z]{6}$/;
    
    // let result = pattern.test(username);
    // if(result){
    //     console.log("passw");
    // }else{
    //     console.log('faild');
    // }


    // return an integer
     let result = username.search(pattern);
    


});




