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

"use strict";
// change code below this line
let magic = () => new Date();
// change code above this line
// test your code
console.log(magic());

////////////////

"use strict";
// change code below this line
let myConcat = (arr1, arr2) => arr1.concat(arr2);

// change code above this line
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));

////////////////

"use strict";
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
// change code below this line
let squaredIntegers = realNumberArray.filter((item) => item > 0 && item % 1 == 0).map((item) => item * item);
// change code above this line
// test your code
console.log(squaredIntegers);

////////////////


function increment(number = 0, value = 1) {
  return number + value;
}
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN

////////////////

"use strict";
function sum(...args) {
  const array = args;
  return array.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

////////////////

