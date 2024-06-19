// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//     statement

// INITIAL EXPRESSION - Initialises a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// first sets beginning, middle sets limit, end sets increments
// can't use const, must use let
// for is block scoped, so can't be initialised outside function
for (let i = 0; i <= 10; i++) {
    console.log('Number ' + i);
}

// for situations where you check to see if something is >= or <= to something and want to do something based on that
for (let j = 0; j <= 10; j++) {
    if(j === 7) {
        console.log('7 is my lucky number');
    } else {
        console.log('Number ' + j);
    }
}


// Nested Loops
for (let k = 1; k <= 10; k++) {
    console.log('Number ' + k);

    for (let l = 1; l <= 10; l++) {
        console.log(`${k} * ${l} = ${k * l}`);
    }
}


// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let m = 0; m < names.length; m++) {
    if (names[m] === 'Sara') {
        console.log(names[m] + ` is the best`);
    } else {
        console.log(names[m]);
    }
}