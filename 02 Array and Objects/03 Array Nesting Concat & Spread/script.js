let x;

// nesting is having an array as an index inside of another array

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// adds berries array to end of fruits array as extra item
// fruits.push(berries);

// gives specific output
// x = fruits[3][1];

// creates array of arrays
const allFruits = [fruits, berries];

// gives first item in second array
x = allFruits[1][0]; 

// creates one single array containing everything from 1 and then everything from 2
x = fruits.concat(berries);

// Spread Operator (...)
// takes items from arrays and combines them
x = [...fruits, ...berries];

// Flatten Arrays
// unnests arrays inside array
const arr = [1, 2, [3, 4], 5, [6, 7], 8]
x = arr.flat();

// Static Methods on Array Object
// Boolean check if structure is an array
x = Array.isArray(fruits);
// takes string and turns it into an array of elements
x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;
// creates array of values of variables above.
x = Array.of(a, b, c);

console.log(x);