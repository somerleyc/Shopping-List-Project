const age = 18;

// // Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cannot vote');
}

// // Using a ternary operator (condition ? what happen if true : what happen if false)
age >= 18 ? console.log('You can vote!') : console.log('You cannot vote');

// // Assigning a conditional value to a variable using ternary operator
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You cannot vote';

console.log(canVote);
console.log(canVote2);

// // Multiple statements
const auth = true;
// let redirect;

// if (auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Access Denied');
//     redirect = '/login';
// }

// const redirect = auth 
//     ? (alert('Welcome to the dashboard'), '/dashboard') 
//     : (alert('Access Denied'), '/login');                 // shorter version of above

// console.log(redirect);

// Shorthand for no else statement
auth ? console.log('Welcome to the dashboard') : null;   // either put ': null' in place of else or do below with && instead of ?

auth && console.log('Welcome to the dashboard');