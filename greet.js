var nameEntered = document.querySelector(".userName");
var radioSelected = document.querySelector(".radio");
var greet = document.querySelector(".greeting");
var count = document.querySelector(".counter");
var button = document.querySelector(".greetBtn");
var reset = document.querySelector(".resetBtn");
var error = document.querySelector(".errorMsg");

var existingNames;
var namesGreeted = existingNames || {};
var greetCounter = 0;

let greetInst = greetFactory();
button.addEventListener("click", function () {
  var greeting = greet.value;

  var rad = document.querySelector("input[name='language']:checked");
  if (rad && nameEntered.value) {
    var selectedRad = rad.value;

    greetInst.nameVal(nameEntered.value);
    namesGreeted = greetInst.getNameGreeted();
    greeting = greetInst.setGreeting(nameEntered.value, selectedRad);
    greetCounter = greetInst.getCounter();
    
    localStorage.setItem('names', JSON.stringify(namesGreeted));
    
    // greeting = "";
    error.innerHTML = ''
    //alert if radio buttons are not selected and name fields are empty
  } else {
    if (!rad && !nameEntered.value) {
      // error.innerHTML = ('Please select a language & enter your name!');
    error.innerHTML =  setTimeout(function(){  }, 3000);

      // function myFunction(){
      //   alert("a");
      // }
      // error.innerHTML = myFunction();
      // setTimeout(function(){$('errorMessage').hide()},1000);
      // greeting = "";
    } else if (!rad) {
     error.innerHTML = 'Please select a language';
      greeting = "";
    } else if (!nameEntered.value && rad) {
      error.innerHTML = 'please enter name to continue'
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
// function counter() {
//   var key = Object.keys(namesGreeted);
//   return key.length;
// }
// counter();

//resets counter to zero
reset.addEventListener("click", function () {
  location.reload();
  localStorage.clear();
});

