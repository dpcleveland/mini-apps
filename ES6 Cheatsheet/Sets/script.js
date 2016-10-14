window.onload = function() {

    var names = new Set();

    names.add("Shaun").add("Ryu").add("Crystal").add("Ryu"); // eliminates duplicates

    console.log(names.delete("Crystal"));

    // names.delete("Shaun").delete("Ryu"); // error

    // names.clear(); // clears out entire set

    console.log(names.has("Ryu")); // true
    console.log(names.has("Crystal")); // false

    console.log(names);

    console.log(names.size);


    var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"];

    var refinedNinjas = new Set(ninjas);

    console.log(refinedNinjas);
    console.log([...refinedNinjas]);
    
}
