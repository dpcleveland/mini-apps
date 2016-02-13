function queue(arr, item) {
  arr.push(item);
  var removed = arr.shift();

  return removed;


}

var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(queue(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
