function greetFactory() {
    var namesGreeted = {};
    var counter = 0;

    // function setNameGreeted(nameEntered) {
    //     namesGreeted = nameEntered;
    // }

    function getCounter() {
        return counter;
    }

    function setGreeting(name, checkedRadioBtn) {
        // name = name.toLowerCase();
        // let a = name.substr(1, name.length);
        // let firstCharacter = name.char(0).toUpperCase();
        // name = firstCharacter + a;

        // if (namesGreeted[name] === undefined) {
        //     namesGreeted[name] = 0;
        //     counter++;
        // } else {
        //     namesGreeted[name]++;
        // }


        if (checkedRadioBtn === "english") {
            return "Hello, " + name;
        }
        else if (checkedRadioBtn === "afrikaans") {
            return "Goeie môre, " + name;
        }
        else if (checkedRadioBtn === "isixhosa") {
            return "Molo, " + name;
        }
    }

    function nameVal(name) {
        if (namesGreeted[name] === undefined) {
            namesGreeted[name] = 0;
            counter++;
        } else {
            namesGreeted[name]++;
        }
    }

    function getNameGreeted() {
        return namesGreeted;
    }

    function a(){
        setTimeout(function(){$('errorMessage').hide()},1000);
        return "a"
    }

    return {
        // setNameGreeted,
        getNameGreeted,
        setGreeting,
        getCounter,
        nameVal,
        a,
    }
}

