if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is NOT true');
} //won't run because it's false

const x = 10;
const y = 5;

if (x > y) {
    console.log(`${x} is greater than ${y}`);
}

// if (x === y) {
//     console.log(`${x} is equal to ${y}`);
// } //won't run because it's false

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

const z = 10;

if (x >= z) {
    console.log(`${x} is greater than or equal to ${z}`);
}

// if (x !== y) {
//     const a = 20;
//     console.log(`${a} is 20`);
// }

// console.log(a); //won't log because const is not block level scoped.

// Shorthand if (cluttered and wouldn't suggest this formatting)
if (x >= y) console.log(`${x} is greater than or equal to ${y}`),
console.log('This is true');
else console.log('This is false');
