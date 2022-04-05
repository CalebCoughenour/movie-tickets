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

Test: "It should not adjust price if age is above 12 and below 55"
Code: User.findAgeRange("29");
Expected: ticketPrice = 15;

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


Describe: addUser(user);

Test: "It should receive inputted name from user, and store data"
Code: User.addUser("Caleb");
Expected Output: "Caleb"

Describe: setMovieTime(timeOfDay);

Test: "It should set time to 10 if 10am is chosen"
Code: Movies.setMovieTime(1);
Expected Output: 10;

Test: "It should set time to 14 if 2pm is chosen"
Code: Movies.setMovieTime(2);
Expected Output: 14;

Test: "It should set the time to 19 if 7pm is chosen"
Code: Movies.setMovieTime(3);
Expected Output: 19;



Describe: adjustForMovieTime();

Test: "It should not change price if time other than matinee is chosen."
Code: Movies.adjustForMovieTime(14);
Expected Output: ticketPrice = 15;

Test: "It should subtract 5 from price if matinee is chosen."
Code: Movies.adjustForMovieTime(10);
Expect Output: ticketPrice = 10;


Describe: adjustForReleaseDate();

Test: "It should not change price if not a new release"
Code: Movies.adjustForReleaseDate(false);
Expected