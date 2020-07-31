function square(num) {
  return num * num
}

function addition(x, y) {
  return x + y
}

let squareS = square(3)
console.log(squareS)

function isPurple(color) {
  return color.toLowerCase() === 'purple'
}

console.log(isPurple('purple'))

function containsPurple(arr) {
  for (let color of arr) {
    if (color === 'purple' || color === 'magenta') {
      return true
    }
  }
  return false
}

// Function Challenge

console.log('========Function Challenge ============')
function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false
  }
  return true
}

console.log(isValidPassword('89Fjj1nms', 'dogluvr'));


// function array challenge 
function averageChallenge(arrayValu){
    let total = 0;
    for(let eachArrayVal of arrayValu){
         total +=  eachArrayVal;
    }
    return total / arrayValu.length;
}

