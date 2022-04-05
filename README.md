Ticket Price: $15

Select name of a movie,
-Regular Tickets - Non-first release $15
-New Release $15 + 5 (prototype?)

Time of day movie is available
-Matinee $15 - 5

User age.
-Senior Tickets $15 - 5 (prototype?) forEach?));
-Child Ticket $15 - 7

= Cost of ticket


Object: function Movie(name, newRelease, timeOfDay){
  this.name = name;
  this.newRelease = newRelease;
  this.timeOfDay = timeOfDay;
}

const movieTimes = ["10", "14", "19"];
const theBatman = new Movie("The Batman", true, movieTimes);
const pulpFiction = new Movie("Pulp Fiction", false, movieTimes);
const liarLiar = new Movie("Liar Liar", false, movieTimes);

Object: User(age) {
  this.age = age;
  this.currentId = 0;
}

  prototype: assignId(user){
    this.currentId += 1;
    return thiscurrentId;
  }

  Prototype: findAgeRange (age){
    if (age < 13) {kid}, else if (age > 64) {senior}};

Object: Tickets ()
  Prototype: adjustPrice {
    if (user.ageRange +-5, or -7 if child}


//UI scripts for user input
let newUser = new User(age)
const newUserAge = newUser.findAgeRange();

const finalTicketPrice = newUserAge.adjustPrice();
  expected output:

//let minion = new user("Banana", "6") //use second arguement for return value;
//let legolas = new user("Elf Dude", "12000");



Describe: findAgeRange(age);

Test: "It should receive input age from user, and store data"
Code: User.findAgeRange("12");
Expected Output: "12"

Test: "It should subract 5 from ticket price if user is a child"
Code: User.findAgeRange("11")
Expected Output: ticketPrice = 10;

Test: "It should subract 5 from ticket price if user is a senior"
Code: User.findAgeRange("56")
Expected Output: ticketPrice = 10;

Describe: assignId();

Test: "It should add ID."
Code: assignId();
Expected Output: <object> {....id:1};




Test: "It should receive inputted name from user, and store data"
Code: User.addUser("Caleb");
Expected Output: "Caleb"
