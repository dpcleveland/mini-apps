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

////////////////////////////////////////////////
// block scoping

// old way
var a = 1;

function() {
    var b = 2;
}
console.log(b); // doesn't work

if (true) {
    var b = 2;
}
console.log(b); // 2

// new way

var a = 1; // let is the new var

if (true) {
    let b = 2; // only used within block
}

console.log(b); // doesn't work

for (20) {
    let b = 2; // gets destroyed and recreated each loop
}

const foo = 1;

if (true) {
    const bar = 2; // block scoped
    bar = 3; // error - can't change const
}

console.log(bar); // not defined

// use const for everything. if you have to change value then use let

////////////////////////////////////////////////
// classes

// old way
function Parent() {
    // constructor

}
Parent.prototype.foo = function() {}
Parent.prototype.bar = function() {}

// new way
class Parent {
    age = 34; // es7 define static class properties

    constructor() {

    }

    static foo() {

    }

    bar() {

    }
}

var parent = new Parent();
parent.foo();
parent.age // 34 in es7

Parent.foo(); // correlates to the static foo()

class Child extends Parent {
    constructor() {
        super()
    }

    baz() {

    }
}

var child = new Child();
child.bar();
