window.onload = function() {

    var temp = `hello,

    my name is ryu`;

    console.log(temp); // formatted with white space

    function logNinja(name, age) {
        console.log("my name is " + name + " and my age is " + age);
    }

    logNinja("Ryu", 24); // my name is Ryu and my age is 24

    function logFancyNinja(name, age) {
        console.log(`my name is ${name} and my age is ${10 + 16}`);
    }

    logFancyNinja("Daniel", 26); // my name is Daniel and my age is 26
}
