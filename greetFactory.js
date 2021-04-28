function greetFactory() {
    var name;
    var greeting;
    // var nameGreeted;

    function setNameGreeted(nameEntered){
        name = nameEntered;
    }

    function getNameGreeted(){
        return name;
    }

    function greeting(checkedRadioBtn) {
        if (checkedRadioBtn === "english") {
            greeting = "Hello, ";
        }
        else if (checkedRadioBtn === "afrikaans") {
            greeting = "Goeie môre, ";
        }
        else if (checkedRadioBtn === "isixhosa") {
            greeting = "Molo, ";
        }
    }

    function personGreeted(){
        return greeting + name;
    }




    // function nameVal(name) {
    //     if (namesGreeted[name] === undefined) {
    //         namesGreeted[name] = 0;
    //     }
    // }

    function counter() {
        // if(getNameGreeted() && greeting){
        var key = Object.keys(name);
        return key.length;
        // }
    }
    
    return {
        // nameVal,
        counter,
        setNameGreeted,
        getNameGreeted,
        greeting,
        personGreeted,
    }
}