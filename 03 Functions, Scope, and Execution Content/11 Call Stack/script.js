// call stack is a stack of functions to be executed. manages execution contexts. stacks are last in first out.

// // First example
// // First pushed into the stack, popped off when completed and second is pushed on. Second is popped off when completed and third is pushed on.

// function first() {
//     console.log('first...');
// }

// function second() {
//     console.log('second...');
// }

// function third() {
//     console.log('third...');
// }


// Second example
// First is run from the bottom (line 36) and second is run as part of first. Second runs and third runs as part of second. So first pushes onto the stack and brings second with it, who brings third. Third finishes and pops off, then second finishes and pops off, then first finishes and pops off. Last in first out.

function first() {
    console.log('first...');
    second();
}

function second() {
    console.log('second...');
    third();
}

function third() {
    console.log('third...');
}

first();