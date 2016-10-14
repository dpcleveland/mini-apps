window.onload = function() {

    var name = "Crystal";
    var belt = "Black";

    var ninja = {
        name: name,
        belt: belt,
        chop: function(x) {
            console.log("you chopped the enemy " + x + "times");
        }
    };

    var fancyNinja = {
        name, belt,
        fancyChop(x) {
            console.log(`you chopped the enemy ${x} times`)
        }
    };

    console.log(ninja.name); // Crystal
    console.log(fancyNinja.name); // Crystal
    console.log(ninja.chop(5)); // you chopped the enemy 5 times
    console.log(fancyNinja.fancyChop(10)); // you chopped the enemy 10 times


}
