// For loops

// for(let i = 1 ; i <= 10 ; i++){
//     console.log("Hello ", i);
// }

for (let i = 1; i <= 20; i++) {
    console.log(i * i)
}

console.log('Decrementing loop')
for (let i = 200; i >= 0; i -= 25) {
    console.log(i)
}

console.log('Infinite Loop must be avioded')

// const animals = ['lions' ,'tiger', 'bears'];

for (let j = 0; j < newMusic.length; j++) {
    console.log(newMusic[j])
}

const myStudent = [
    {
        firstName: 'Zeus',
        grade: 86
    }, {
        firstName: 'Artiemsu',
        grade: 97
    }, {
        firstName: 'Hera',
        grade: 72
    }, {
        firstName: 'Aposlls',
        grade: 45
    },
]

let sum = 0;
for (let i = 0; i < myStudent.length; i++) {
    console.log(myStudent[i].firstName);
    console.log(myStudent[i].grade);

    sum += myStudent[i].grade;
}

console.log(sum);


WeekDayName = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];
