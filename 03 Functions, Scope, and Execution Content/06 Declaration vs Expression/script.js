// Function Declaration
function addDollarSign(value) {
   return '$' + value;
}

console.log(addDollarSign(100));


// Function Expression
const addPlusSign = function(value) {
   return '+' + value;
}

console.log(addPlusSign(200));

// invoked the same way, but declared differently. No semi-colon at end of declaration. 
// Declaration can be logged before function line - not recommended, keep code clean.