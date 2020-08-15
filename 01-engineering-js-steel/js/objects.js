/* Object are collection of properties (key and Value )
 {} = object literals 
 Objects does not encode order = arrays does 
 When we create an object the keys are automatically converted to strings 


  */

  let personObj = {
    name : 'Person',
    age : 30,
    profession : 'Student',
    location : 'Accra',
    Skill : 'Software Engineer'
}

let comments = {
    username : 'sillyGoesHere',
    downVoes : 19,
    upVotes : 2000,
    netScoe : 120,
    commentText : 'Tastes like chicken soup',
    tages : ['#haspupy' ,'#fuunycode' ,'#constant'],
    isGilded : false,
    contry : 'Ghana',
}

let registratioForm = {
    firstName : 'James',
    lastName : 'Alex',
    age : 20,
    password :{
        password : 'cominghome123',
        confirmpassword : 'cominghome123',
    },
    useremail : 'hellouser@gmail.com',
    userCounty : 'Ghana',
    nationality : 'Ghanian',
    phoneNumber : '2033002332',
    levels : [100, 200 , 300 , 400],
    123 : 'centry '
}

// Accessing Object can be (objectName.key or ObjectName['passin key'])
registratioForm.firstName;
registratioForm.lastName;
registratioForm.age;


/* Looping over Objects 
    Object.keys()
    Object.values() and 
    Object.entries()
*/

for(let key in registratioForm){
    console.log(`Obj ${key} : Key :${registratioForm[key]}`);
}

for(let key in personObj){
    console.log(`${key} : ${personObj[key]}`);
}


