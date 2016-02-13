// Create object
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

// Create another object
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

// Put the objects in an array
var contacts = [bob, mary];

// Console log the first and last names
// This is basically just setting up for the list
function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

// Gets the contacts, then uses the print function to console log them
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"

// Has to be commented out for the rest to work

var search = function(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++)
    {if (contacts[i].lastName === lastName) {
        printPerson(contacts[i]);
    }

    }
}
search("Jones");
*/

// This is a funtion that can create objects
var add = function(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
};

add("Daniel", "Cleveland", "fakeemail@gmail.com", "(512) 555-5555");
list();
