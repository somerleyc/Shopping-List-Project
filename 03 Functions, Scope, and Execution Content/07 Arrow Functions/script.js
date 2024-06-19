//// Regular function declaration
// function add(a, b) {
//    return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
   return a + b;
}

// Implicit return
const subtract = (a, b) => a - b;

// Can leave off () with a single parameter
const double = a => a * 2;

// Returning an object
const createObj = () => ({
   name: 'Brad'
});

// Arrow function in a callback
// this 
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
   console.log(n);
});

// can also work like this
numbers.forEach(n => console.log(n));

console.log(add(1,2));
console.log(subtract(10,5));
console.log(double(10));
console.log(createObj());