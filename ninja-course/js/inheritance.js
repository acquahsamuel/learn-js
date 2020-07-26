function User(username , email){
    this.username = username;
    this.email = email;
}


// Storing function on the Prototype Object
User.prototype.login = function(){
    console.log(`${this.username}  has logged in`);
    return this;
}

User.prototype.signIn = function(){
    console.log(`${this.username}  ${this.email} has logged in`);
    return this;
}


// Prototypal Inheritance
function Admin(username , email , title){
    // The call method takes the properties of the User class
    User.call(this , username , email);
    this.title = title;
}


// To Access All the methods of the class use .create method
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
    
}


const userOne = new User("James" , "James@gmail.com");
const userTwo = new User("James" , "JSX@gmail.com");
const userThree = new User("James" , "allodwd@gmail.com");
const admin = new Admin('James' , "codeAllDat@gmail..com" , 'programmer');


console.log(userOne);
console.log(userTwo);
console.log(userThree);
console.log(admin);