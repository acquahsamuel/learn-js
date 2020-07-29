const arrayValue = [
    'red',
    'orange',
    'blue',
    'oink',
    'yellow'
];


console.log(arrayValue[arrayValue.length - 1]);
console.log(arrayValue[arrayValue.length] = "Water")

console.log(arrayValue.length)
console.log(arrayValue);


let newMusic = ['Theophilus Sunday', 'Hit man the jack', 'Amakye Dede song', 'Freedom by code'];

console.log(newMusic);

letters = [
    'T',
    'C',
    'E',
    'P',
    'S',
    'E',
    'R'
];
console.log(letters);
console.log(letters.join('-'));


let animals = [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'
];
console.log(animals);
// Remember the lenght is always -1 of the total
let swimmmers = animals.slice(0, 3);
console.log(swimmmers);

// Last item == -1
console.log(animals[animals.length - 1]);

const quadruped = animals.slice(-3);
console.log(quadruped);


// Splice method on arrays
console.log(animals.splice(1, 1));
console.log(animals.splice(1, 1, 'Herllo'))

console.log(animals);
























let secondIndexOf = function (s1, s2) {
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2, firstIndex + 1);
}


let animals = [
    'shark',
    'salmon',
    'whale',
    'bear',
    'lizard',
    'tortoise'
];

// splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals.splice(1, 0, 'octopus');
// ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
// 'at index 5, delete 2 items'
animals.splice(5, 2);
// ["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
// 'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]
