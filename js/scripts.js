//Business Logic for User

let ticketBook = new TicketBook();

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

function User(name, age) {
  this.name = name;
  this.age = age;
  this.ticketPrice = [];
}


User.prototype.findAgeRange = function(age) {
  let userAge = this.age;
  let intUserAge = parseInt(userAge);
  if (intUserAge < 13) {
    ticketPrice = this.ticketPrice - 5;
    return ticketPrice;
  } else if (intUserAge > 54) {
    ticketPrice = this.ticketPrice - 5;
    return ticketPrice; 
  }
  return ticketPrice;
};

//Business Logic for Movies

let ticketPrice = 15;
let times = [10, 14, 19];
let movieTime = [];
let theBatman = new Movies("The Batman", true, movieTime);
let pulpFiction = new Movies("Pulp Fiction", false, movieTime);
let liarLiar = new Movies("Liar Liar", false, movieTime);

function Movies(title, newRelease, movieTime) {
  this.title = title;
  this.newRelease = newRelease;
  this.movieTime = movieTime;
}

Movies.prototype.setMovieTime = function(timeValue){
  if (timeValue === 1) {
    this.movieTime.push(times[0]);
    return this.movieTime;
  } else if (timeValue === 2) {
    this.movieTime.push(times[1]);
    return this.movieTime;
  } else {
    this.movieTime.push(times[2]);
    return this.movieTime;
  }
};

Movies.prototype.adjustForMovieTime = function(movieTime, ticketPrice){
  let time = this.movieTime;
  let timeInt = parseInt(time);
  let price = ticketPrice;
  if (timeInt === 10){
    ticketPrice = price - 5;
    return ticketPrice;
  }
  return ticketPrice;
}

Movies.prototype.adjustForReleaseDate = function(newRelease, ticketPrice) {
  let releaseDate = this.newRelease;
  let price = ticketPrice;
  if(releaseDate === true){
    ticketPrice = price + 5;
    return ticketPrice;
  } else {
    return ticketPrice;
  }
}

//UI Logic

$(document).ready(function () {
  $("#movie-form").submit(function(event) {
    event.preventDefault();

    //selectors
    const userName = $("#users-name").val();
    const userAge = $("#users-age").val();
    const movieSelection = parseInt($("#movie-selection").val());
    const formMovieTime = parseInt($("#movie-time").val());

    //user
    let newUser = new User(userName, userAge);

    //movie
    function selectMovie(movieSelection){
      if (movieSelection === 1){
        theBatman.setMovieTime(formMovieTime);
      } else if (movieSelection === 2){
        pulpFiction.setMovieTime(formMovieTime);
      } else if (movieSelection === 3){
        liarLiar.setMovieTime(formMovieTime);
      }
    }
    selectMovie(movieSelection);
  });
});




