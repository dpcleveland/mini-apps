window.onload = function() {

    function log(num = 10) {
        console.log(num);
    }

    log(5); // logs 5
    log(); // logs 10

    function logNinja(name = "Ryu", belt = "red", age = 25) {
        console.log("My name is " + name + " and my belt color is " + belt + " and my age is " + age);
    }

    logNinja("Daniel", "black", "26");
    logNinja();

}
