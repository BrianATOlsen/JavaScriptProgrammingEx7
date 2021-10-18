/**
* @description Long anything to the console
* @param {*} obj the object to write to the console.
*/
function l(obj) {
    console.log(obj);
}

/** 
* This is a declarative function with no parameters or arguments
*/
function doThings() {
    l('I do stuff but have nothing to contribute or accept.');
}
doThings();


/** @description Adds two numbers. This is a declarative function. Declarative functions are hoisted.
* @param { number } value1 the first value
* @param { number } value2 the second value
* @returns { number } sum of the value1 and value2
*/
function add(value1, value2) {
    return value1 + value2;
}

/** @description Subtract two numbers. This is a function expression.
* @param { number } value1 the first value
* @param { number } value2 the second value
* @returns { number } the difference between the value1 and value2
*/
let subtract = function (value1, value2) {
    return value1 - value2;
}

/** @description Multiply two numbers. This is an Arrow function.
* @param { number } value1 the first value
* @param { number } value2 the second value
* @returns { number } the product of the value1 and value2
*/
let multiple = (value1, value2) => { return value1 * value2; }

/** @description Divide two numbers. This is also an Arrow function.
* @param { number } value1 the first value
* @param { number } value2 the second value
* @returns { number } the dividend of the value1 and value2
*/
let divide = (value1, value2) => { return value1 / value2; }

l("Call declarative add fuction");
let a = add(3, 2);
l(a);
l("~~~~~~~~~~~~")

l("Call subtract fuction expression");
let b = subtract(9, 5);
l(b);
l("~~~~~~~~~~~~")

l("Call multiple arrow fuction");
let c = multiple(3, 4);
l(c);
l("~~~~~~~~~~~~")

l("Call divide arrow fuction");
let d = divide(12, 4);
l(d);
l("~~~~~~~~~~~~")

//Functions can be reassigned into anything
//JavaScript is a dynamic language
add = "Brian";
l(add);
add = 3 * 4;
l(add);

l(subtract(add, 10));


