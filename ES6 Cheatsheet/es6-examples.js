// https://www.youtube.com/watch?v=AfWYO8t7ed4&list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif

////////////////////////////////////////////////
// destructuring

// example 1
var foo = {
    bar: 1,
    baz: 2
};

// old
var bar = foo.bar;
var baz = foo.baz;

// es6
var { bar, baz } = foo;

////////////////////////////////////////////////
// destructuring
// example 2
var tenses = ['me', 'you', 'he'];
var [ firstPerson, secondPerson ] = tenses;  // me, you

////////////////////////////////////////////////
// destructuring
// example 3
Promise.all([promise1, promise2]).then(function([results1, results2]) {

});

////////////////////////////////////////////////
// destructuring
// example 4

// old way
var foo = 2;

var obj = {
    bar: 1,
    foo: 2
}

// new way
var foo = 2;

var obj = {
    bar: 1,
    foo,
}

////////////////////////////////////////////////
// destructuring
// example 5

var name = 'Daniel';
var age = 26;

// old way
{
    name: name,
    age: age
}

// new way
some.method({ name, age });

////////////////////////////////////////////////
// destrucuring arguments

// old way
function calcBmi(weight, height, callback) {
    var bmi = weight / Math.pow(height, 2);
    if (bmi > max) {
        console.log('you are overweight');
    }
    if (callback) {
        callback(bmi);
    }
}
calcBmi(weight, height);
calcBmi(weight, height, function() {});

// new way
function calcBmi({ weight: w, height: h, max = 25, callback }) {
    var bmi = w / Math.pow(h, 2);
    if (bmi > max) {
        console.log('you are overweight');
    }
    if (callback) {
        callback(bmi);
    }
}
calcBmi({ weight, height, max: 25 });
calcBmi({ weight, height, callback: function() {} });

////////////////////////////////////////////////
// template strings

// old way
var name = 'Daniel';
var thing = 'code';
var greet = 'hi, my name is ' + name + 'and I like to ' + thing + '.';

// new way
var greet = `hi, my name is ${name} and I like to ${thing}!`;
