const correctAnswers = ['A', 'A' , 'A' , 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit' , (e) =>{
    e.preventDefault();

    let score = 0;
    let userAnswers = [form.q1.value , form.q2.value, form.q3.value, form.q4.value];
  
    userAnswers.forEach((answer , index) =>{
        if(answer === correctAnswers[index]){
            score += 25;    
        }
    });

    // Scrolling page to the top
    // Callback function
    scrollTo(0 , 0);
    result.classList.remove('d-none');

    // Creating a timmer function 
    // Callback function
    let output = 0 ;
    let timmer =  setInterval(() =>{
        result.querySelector('span').textContent = ` ${output}%`;
        if(output === score){
            clearInterval(timmer);
        }else{
            output++;
        }

    } ,10);
});


  

// They are all the same { The Global window Object }
// console.log(document.querySelector('.form'));
// console.log(window.document.querySelector('.forms'))


