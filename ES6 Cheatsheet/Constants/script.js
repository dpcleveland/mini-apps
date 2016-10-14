window.onload = function() {

    const pi = 3.142;
    // pi = 10; // doesn't work
    // const pi = 2; // doesn't work

    function calcArea(r) {
        const pi = 10; // this works because it's a local version of the constant
        console.log("The area is: " + pi * r * r);
    }

    console.log(pi); // 3.142 because using global version of constant
    calcArea(5);
}
