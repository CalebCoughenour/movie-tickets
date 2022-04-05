//Business Logic

function TicketBook(){
  this.users = {};
  this.currentId = 0;
}

TicketBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TicketBook.prototype.addUser = function(user) {
  user.id = this.assignId();
  this.users[user.id] = user;
};

let ticketBook = new TicketBook();

function User(name, age) {
  this.name = name;
  this.age = age;
}


User.prototype.findAgeRange = function(age) {
  let userAge = this.age;
  return userAge;
};


//UI Logic
$(document).ready(function () {

  
});




