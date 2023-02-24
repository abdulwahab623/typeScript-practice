"use strict";
let greet;
greet = () => {
    console.log('hello,again');
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 7, 50);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeet = (user) => {
    console.log(`${user.name} says hello`);
};
const greeetagain = (user) => {
    console.log(`${user.name} says hello `);
};
//function signature 
//let greett: function;
//Example
let gree;
gree = (name, greeting) => {
    console.log(`${name}says ${greeting}`);
};
//Example 2 
// if a function does not return any value then you can specify void as return type.
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
let loggg;
loggg = (ninjaa) => {
    console.log(`${ninjaa.name} is ${ninjaa.age}year old`);
};
