let highScore = 1430;
let userScore = 1500;

/*
if(userScore >= highScore){
    console.log(`Congrats you have a new high score ${userScore}`);
    highScore = userScore;
}else{
    console.log(`Good game . Your score of ${userScore} did not beat the high score of  ${highScore}`)
}

*/

/*
    Carrie telkinesis 
    Nesting 
*/

let password = 'cat dog';
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password');
    } else {
        console.log('Password is long enough but cannot contain spaces !!');
    }
} else {
    console.log('Your password is short');
}

// Rewrite
let password1 = 'cat dog';
if (password1 >= 6) {
    if (password1.indexOf('') !== -1) {
        console.log('Password cannot include spaces');
    } else {
        console.log('Valid password !!');
    }
} else {
    console.log('Please password is short ');
}


/*
Switch Javascript Tenary operator 
*/

(5 > 4) ? console.log("True") : console.log("False");

let status = 'offline'
let color = status === 'offline' ? 'red' : 'green';
console.log(color);
