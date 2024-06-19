// For...of loops are used to loop through iterable objects like arrays or even strings, and maps, and sets. Cleaner way to loop through an array.
// For...in is used for object literals.

// Loop through arrays
// Ex 1
const items = ['book', 'table', 'chair', 'kite'];

for (const item of items) {
    console.log(item);
}

// Ex 2
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'},
]

for (const user of users) {
    console.log(user.name);

}
// Loop over strings
const str = 'Hello World';

for (const letter of str) {
    console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}