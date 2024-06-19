// const email = 'test@test.com';

// if (email) {
//     console.log('You passed in an email');
//     }

// // if you pass something into an if statement it's always going to be coerced into a boolean
// console.log(Boolean(email));

//Falsy Values:
const x = false;
// const x = 0;
// const x = '';
// const x = null;
// const x = undefined;
// const x = NaN;

//Truthy Values:
// const x = Everything else that is not falsy;
// const x = true;
// const x = '0'; (0 in a string)
// const x = ' '; (space in a string)
// const x = 'false';
// const x = []; (empty array)
// const x = {}; (empty object)
// const x = function () {}; (empty function)

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

// if (children !== undefined) {     (one solution to fix input of 0)
if (!isNaN(children)) {                // another solution is to say the input is not Not a Number
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = [];

if (posts.length > 0) {            // check length to see if array empty to give else statement
    console.log('List Posts');
} else { 
    console.log('No Posts to List');
}

// Checking for empty objects
const user = {};

if (Object.keys(user).length > 0) {                //Object.keys() gives us an array of the keys. Arrays can be length checked. 
    console.log('List user');
} else {
    console.log('No User');
}

// Loose Equality (==)     // == means equal to, === means equal to including type
console.log(false == 0);
console.log(false === 0);
console.log('' == 0);
console.log('' === 0);
console.log(null == undefined);
console.log(null === undefined);