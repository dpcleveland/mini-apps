// Create an empty array
var pets = [];

function printPetName(petName) {
    console.log("Pet Name: " + petName.firstName + " " + petName.lastName);
    console.log("Owner Name: " + petName.ownerName);
    console.log("Breed: " + petName.breed);
    console.log("Gender: " + petName.gender);
    console.log("Age: " + petName.age);
    console.log("\n");
}

function list() {
    var petsLength = pets.length;
    for (var i = 0; i < petsLength; i++) {
        printPetName(pets[i]);
    }
}

var add = function(firstName, lastName, ownerName, breed, gender, age) {
    pets[pets.length] = {
        firstName: firstName,
        lastName: lastName,
        ownerName: ownerName,
        breed: breed,
        gender: gender,
        age: age
    };
};

add("Toby", "Cleveland", "Daniel Cleveland", "corgi", "male", "5");

add("Blue", "Cleveland", "Celeste Cleveland", "cat", "female", "7");

list();
