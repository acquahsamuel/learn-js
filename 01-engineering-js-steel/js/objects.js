const numbers = {
    100: 'one hundered',
    16: 'sixteen'
}

/* correct*/
numbers['700']

const palette = {
    red: '#eb4d4d',
    yellow: 'f9ca24',
    blue: '#30336b'
}

console.log(palette.blue)
console.log(palette['blue'])

// Updating Object
const userReview = {}

userReview.mrSmith = 3.5
userReview['colt'] = 4.5

userReview['colt'] += 3

const student = {
    firstName: 'David',
    lastName: 'Jones',
    strength: [
        'Music', 'Engineering'
    ],
    exams: {
        midterm: 92,
        final: 88
    }
}

console.log(student.strength[1])
console.log(student.firstName)
console.log(student.exams.midterm)

console.log(student['firstName'])
console.log(student.strength['0'])

let average = student.exams.midterm + student.exams.final
console.log(average / 2)

// Array with nested object
const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quality: 1
    }, {
        product: 'Echo Dot',
        price: 29.99,
        quality: 3
    }, {
        product: 'Fire Stick',
        price: 39.99,
        quality: 2
    },
]

console.log(shoppingCart.length)
console.log(shoppingCart[0].price)
console.log(shoppingCart[1].product)

// Trick objects
let nums = [1, 2, 3]
let mystery = [1, 2, 3]
let moreNums = nums

// THey look the same but refer to different arrays in memory (different address)
nums === mystery
// false

// These tow arrays reference the exact same array , so we get true;
nums === moreNums

const users = {
    username: 'CherryGarcia88',
    email: 'garcia@gmail.com',
    notification: ['message', 'alert']
}

// Evaluate either ture or false
if (! users.notification.length) {
    console.log('No new notification')
} else {
    console.log('You have new message')
}
