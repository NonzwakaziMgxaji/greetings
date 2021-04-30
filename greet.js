var nameEntered = document.querySelector(".userName");
var radioSelected = document.querySelector(".radio");
var greet = document.querySelector(".greeting");
var count = document.querySelector(".counter");
var button = document.querySelector(".greetBtn");
var reset = document.querySelector(".resetBtn");

var existingNames;
var namesGreeted = existingNames || {};
var greetCounter = 0;

//check if this user was already greeted before
function nameVal(name) {
  if (namesGreeted[name] === undefined) {
    namesGreeted[name] = 0;
  }
}

button.addEventListener("click", function () {
  var greeting = greet.value;

  var rad = document.querySelector("input[name='language']:checked");
  if (rad && nameEntered.value) {
    var selectedRad = rad.value;
    nameVal(nameEntered.value);

    if (selectedRad === "english") {
      greeting = "Hello, " + nameEntered.value;
    }
    else if (selectedRad === "afrikaans") {
      greeting = "Goeie môre, " + nameEntered.value;
    }
    else if (selectedRad === "isixhosa") {
      greeting = "Molo, " + nameEntered.value;
    }

    //localStorage to keep the names greeted
    localStorage.setItem('names', JSON.stringify(namesGreeted));
    counter();
    //assign counter func(which returns the number of names greeted) to greetCounter
    greetCounter = counter();

    //alert if radio buttons are not selected and name fields are empty
  } else {
     if (!rad && !nameEntered.value) {
      alert('Please select a language & enter your name!');
      greeting = "";
    } else if (!rad) {
      alert('Please select a language');
      greeting = "";
    } else if (!nameEntered.value && rad) {
      alert('Please enter your name!');
      greeting = "";
    }
  }

  //display the greeting or contents of greet and HTML element 
  greet.innerHTML = greeting;
  count.innerHTML = greetCounter;

  //clear textbox once button is clicked
  nameEntered.value = "";
});

//retrieve the values stored in local storage
if (localStorage['names']) {
  existingNames = localStorage.getItem('names', JSON.parse(localStorage['names']));
}

// objects keys method returns an array of a given object's own enumerable property names
function counter() {
  var key = Object.keys(namesGreeted);
  return key.length;
}
counter();

//resets counter to zero
reset.addEventListener("click", function () {
  location.reload();
  localStorage.clear();
});

