var nameEntered = document.querySelector(".userName");
var radioSelected = document.querySelector(".radio");
var greet = document.querySelector(".greeting");
var count = document.querySelector(".counter");
var button = document.querySelector(".greetBtn");
var reset = document.querySelector(".resetBtn");

let name = greetFactory();
button.addEventListener("click", function () {
  var rad = document.querySelector("input[name='language']:checked");
  if (rad) {
    var selectedRad = rad.value;
    
    name.setNameGreeted(nameEntered.value);

    name.getNameGreeted();

    name.greeting(selectedRad);
  }

  greet.innerHTML = name.personGreeted();
  count.innerHTML = name.counter(nameEntered.value);
});

//retrieve the values stored in local storage
// if (localStorage['names']) {
//   existingNames = localStorage.getItem('names', JSON.parse(localStorage['names']));
// }

// objects keys method returns an array of a given object's own enumerable property names
// function counter() {
//   var key = Object.keys(namesGreeted);
//   return key.length;
// }


// if (localStorage['names']){
//   greetCounter = Number(localStorage['names']);
// }

//resets counter to zero
// reset.addEventListener("click", function () {
//   location.reload();
//   localStorage.clear();
// });

