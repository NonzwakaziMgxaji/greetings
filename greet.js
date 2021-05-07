var nameEntered = document.querySelector(".userName");
var radioSelected = document.querySelector(".radio");
var greet = document.querySelector(".greeting");
var count = document.querySelector(".counter");
var button = document.querySelector(".greetBtn");
var reset = document.querySelector(".resetBtn");
var error = document.querySelector(".errorMsg");

var existingNames;

//retrieve the values stored in local storage
if (localStorage['names']) {
  existingNames = JSON.parse(localStorage.getItem('names'));
}

let greetInst = greetFactory(existingNames);


button.addEventListener("click", function () {
  var greeting = greet.value;

  var rad = document.querySelector("input[name='language']:checked");
  if (rad && nameEntered.value) {
    var selectedRad = rad.value;
    error.innerHTML = "";
    greetInst.nameVal(nameEntered.value);
    namesGreeted = greetInst.getNameGreeted();
    greeting = greetInst.setGreeting(nameEntered.value, selectedRad);
    greetCounter = greetInst.getCounter();

    //store names greeted as object in local storage
    localStorage.setItem('names', JSON.stringify(namesGreeted));

    //alert if radio buttons are not selected and name fields are empty
  } else if (!rad && !nameEntered.value) {
    error.innerHTML = 'PLEASE ENTER YOUR NAME AND SELECT A LANGUAGE!';
    greeting = "";
  } else if (!rad) {
    error.innerHTML = 'PLEASE SELECT A LANGUAGE!';
    greeting = "";
  } else if (!nameEntered.value && rad) {
    error.innerHTML = 'PLEASE ENTER YOUR NAME TO CONTINUE!'
    greeting = "";
  }

  //display the greeting or contents of greet and HTML element 
  greet.innerHTML = greeting;
  count.innerHTML = greetInst.getCounter();

  //clear textbox once button is clicked
  nameEntered.value = "";
});

count.innerHTML = greetInst.getCounter();

//resets counter to zero
reset.addEventListener("click", function () {
  location.reload();
  localStorage.clear();
});
