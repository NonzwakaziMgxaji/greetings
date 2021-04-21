var nameEntered = document.querySelector(".userName");
var radioSelected = document.querySelector(".radio");
var greetBtn = document.querySelector(".greetBtn");
var greet = document.querySelector(".greeting");
var count = document.querySelector(".counter");

// var totalCount = 0;
// var name = nameEntered.value;
// var greets = greet.value;

greetBtn.addEventListener("click", function(){
    var person = nameEntered.value;

    var rad = document.querySelector("input[name='language']:checked");
    if (rad){
        var selectedRad = rad.value;
        if(person && selectedRad === "English"){
            greets = "Hello," + person;
        }
        else if (person && selectedRad === "Afrikaaans"){
            greets = "Goeie more," + person;
        }
        else{
            greets = "Molo," + person;
        }
    }



});