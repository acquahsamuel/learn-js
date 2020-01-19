// Object in javascript
// Key value = association (pair)


let users = {
    firstname : "James",
    lastname  : "Erico",
    age : 40,
    profession : "Blogger",
    blogpost : ['I can talk you out of everything' , 'Continue the hardwork'],
    
    blogpostmain : [ 
        { head : 'ranadiom posud', like : 20, },
        { head : 'standrad kied' , like: 40 },
    ],

    allblog(){
       this.blogpost.forEach(posts => {
         console.log(posts);
       })
    },

    // check out the variable name for conflicting types
    blogpostprint(){
       this.blogpostmain.forEach(blog => {
           console.log(blog.head, blog.like);
       })
    },

    fulldetail(){
        const firstname =  this.firstname;
        console.log(firstname);
    }

};

users.fulldetail();
users.allblog();
users.blogpostprint();




// Student object
var Student = {

    first : "Janem",
    last  : "Philip",
    indexNumber : "UE20029917",
    course : "Bsc Computer Science ",
    year : 2017,
    IsStudentRegisterd : "yes",

    courses : [
        { course : 'Software Engineering', hours : 3},
        { course : 'Programming with C#', hours : 3},
        { course : 'COmputational thinking', hours : 3},
        { course : 'Programming in java', hours : 3},
        { course : 'Programming in VB.Net', hours : 3},
        { course : 'Design and Analysis of algorithms', hours : 3},
    ],

    allCourse(){
        this.courses.forEach(course =>{
            console.log(course.course, course.hours);
        })
    },
    studentName(){
        let fullName = this.first + " " + this.last;
        console.log(fullName);
        return fullName;
    },
    studentIndex(){
        let indexPrint = this.indexNumber;
        console.log(indexPrint);
        return indexPrint;
    }
}


Student.allCourse();
Student.studentName();
Student.studentIndex();


// Math Objects 
const area = 8.2;
console.log(Math.floor(area));  
console.log(Math.ceil(area));

console.log(Math.random(area));
console.log(Math.trunc(area));

console.log(Math.random(area) * 100);