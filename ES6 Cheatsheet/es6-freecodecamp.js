"use strict";
let redNosedReindeer = "Rudolph";
let favorite = redNosedReindeer + " is Santa's favorite reindeer.";


////////////////

"use strict";
var newCampers = [{camper: "Wil"}, {camper: "Sam"}, {camper: "Dav"}];
// only change code below this line
for (let i = 0; i < newCampers.length; i++) {
// only change code above this line
  newCampers[i].roleCall = function() {
    return "Camper # " + (i + 1) + " has arrived.";
  };
}
// test your code
console.log(newCampers[0].roleCall());
console.log(newCampers[1].roleCall());
console.log(newCampers[2].roleCall());

////////////////


