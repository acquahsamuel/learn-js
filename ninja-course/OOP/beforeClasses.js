// Before the introduction of class this was the
// Concept Being Used as classes representation

// Function constructors
function User(username, password, lastname) {
  this.username = username;
  this.password = password;
  this.lastname = lastname;
}


User.prototype.login = function() {
  console.log(`${this.username} has logged in `);
  return this;
};

User.prototype.password = function() {
  console.log(`${this.username} your password is ${this.password}`);
  return this;
};

// Constructor prototype
User.prototype.login = function() {
  console.log(`${this.username} has logged in `);
  return this;
};

User.prototype.logout = function() {
  console.log(`${this.username} has logged out`);
  return this;
};

User.prototype.fullName = function() {
  console.log(`${this.lastname} : ${this.username}`);
  return this;
};

User.prototype.incScore = function() {
  this.score++;
  console.log(`${this.username} has a score of ${this.score}`);
  return this;
};

// Inheritance
function Admin(username, lastname, password ,title) {
  // Note the call(this) referes to the senior constructor
  User.call(this, username, password, lastname);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype = deleteUser = function(){
    // Console Hello
}

const newUserOne = new User("James", "22Ie0X3cv", "ALexa");
const newUserTwo = new User("James", "22I76X3io", "Codes");
const newAdmin = new Admin("James", "iXtod34", "EhteTk" ,"Javascript Engineer");

console.log(newUserOne);
console.log(newUserTwo);
console.log(newAdmin);
