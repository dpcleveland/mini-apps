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

"use strict";
// change 'var' to 'let' or 'const'
// rename constant variables
const PI = 3.14;
const RADIUS = 10;
let calulateCircumference = function(r) {
  let diameter = 2 * r;
  let result = PI * diameter;
  return result;
};
// Test your code
console.log(calulateCircumference(RADIUS));

////////////////

"use strict";
const s = [ 5, 7, 2 ];
// change code below this line
s[0] = [2];
s[1] = [5];
s[2] = [7];
// change code above this line
// Test your code
console.log(s);

////////////////

