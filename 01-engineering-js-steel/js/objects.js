
let personObj = {
    name : 'Person',
    age : 30,
    profession : 'Student',
    location : 'Accra',
    Skill : 'Software Engineer'
}


/* Looping over Objects 
    Object.keys()
    Object.values() and 
    Object.entries()
*/

// for(const props in personObj){
//     console.log(`Obj.${props} = ${personObj[props]}`)
// }


for(let key in personObj){
    console.log(`${key} : ${personObj[key]}`);
}


