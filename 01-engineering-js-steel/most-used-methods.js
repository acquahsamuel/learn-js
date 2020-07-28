//charAt(x)
var myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));
//output: F

//charAt(position)
var message="jquery4u";
//alerts "q"
alert(message.charAt(1))

//concat(v1, v2,..)
var message="Sam"
var final=message.concat(" is a"," hopeless romantic.")
//alerts "Sam is a hopeless romantic."
alert(final)

//fromCharCode(c1, c2,...)
console.log(String.fromCharCode(97,98,99,120,121,122))
//output: abcxyz
console.log(String.fromCharCode(72,69,76,76,79))
//output: HELLO


//indexOf(char/substring)
var sentence="Hi, my name is Sam!"
if (sentence.indexOf("Sam")!=-1)
alert("Sam is in there!")


//lastIndexOf(substr, [start])
var myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));
//output: 11




//match(regexp) //select integers only
var intRegex = /[0-9 -()+]+$/;  
 
var myNumber = '999';
var myInt = myNumber.match(intRegex);
console.log(isInt);
//output: 999
 
var myString = '999 JS Coders';
var myInt = myString.match(intRegex);
console.log(isInt);
//output: null

