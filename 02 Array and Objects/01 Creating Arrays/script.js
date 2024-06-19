// arr is array
// array is special type of object and a data structure that stores multiple values
// array is stored in square brackets []
// array values are called elements, can be numbers, strings, boolean
// can have arrays within arrays
// use index to access elements

let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = numbers.length;

x = `My favourite fruit is an ${fruits[2]}`;

// change orange to pear in fruits array
fruits[2] = 'pear';
x = fruits;
// change length of fruits array
// fruits.length = 2;
// add on new fruit to end of array 
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

console.log(x);

