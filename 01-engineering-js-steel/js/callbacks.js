// Callbacks
/*
 
forEach
map
filter
find 
reduce
some
every

*/

const numsFor = [
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
];

numsFor.forEach(function (n) {
    console.log(n);
});


const numbersMap = [
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27
];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const newNumberMap = numbersMap.map(function (valu) {
    return valu * 2;
})
console.log(newNumberMap);

const randSplit = words.map(function (spli) {
    return spli.split('').join('-');
})

console.log(randSplit);
