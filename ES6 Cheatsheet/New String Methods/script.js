window.onload = function() {

    var repeatString = "graaaavy ";

    console.log(repeatString.repeat(5));


    var startString = "goodbye";

    console.log(startString.startsWith("good")); // true
    console.log(startString.startsWith("bye")); // false
    console.log(startString.startsWith("bye", 4)); // true


    var endString = "goodbye";

    console.log(endString.endsWith("good")); // false
    console.log(endString.endsWith("bye")); // true
    console.log(endString.endsWith("good", endString.length - 3)); // true

    var youSay = "goodbye";

    if (youSay.startsWith("goodbye")) {
        var iSay = "hello";
    }

    console.log(`you say ${youSay}, I say ${iSay}`);

    var test = "My name is Ryu";

    console.log(test.includes("name")); // true

    /* NEW STRING METHODS
    - repeat
    - startsWith
    - endsWith
    - includes
    */
}
