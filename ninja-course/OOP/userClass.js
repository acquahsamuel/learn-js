class User {

    // This constructor set the properties {you pass the properties through}
    constructor(username , lastname){
        this.username = username;
        this.lastname = lastname;
        this.score = 0;
    }

    // MEthods in the Class
    login(){
        console.log(`${this.username} just logged in `);
        return this;
    }

    fullName(){
        console.log(`Hello ${this.username} . ' ' . ${this.lastname}`);
        return this;
    }

    incScore(){
        this.score ++;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
    }
};




class Admin extends User {
    constructor(username , lastname , title){
        // Inheritance
        super(username, lastname);
        this.title = title;
    }

    deleteUser(user){
      users = users.filter(u =>  u.username !== user.username );
    }
}


// It assume the value of username && lastname Here 
const userOne  = new User('James' , 'microppleAlex@gmail.com');
const userTwo  = new User('Pincde' , 'micsshomecode@gmail.com');
const adminUser = new Admin('Alexa' , 'codemail@gmailer.com');
const adminTitle = new Admin('Alex', 'codeland@gmail.com' , 'Developer');


console.log(userOne);
console.log(userTwo);
console.log(adminTitle);


userTwo.login().incScore().incScore().fullName();
userOne.login();
userOne.fullName().incScore();
adminUser.fullName();

let users = [userOne, userTwo , adminUser];

adminUser.deleteUser(userTwo);
console.log(users);
// adminUser.deleteUser(userOne);