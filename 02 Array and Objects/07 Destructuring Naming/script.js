// if key name and value are the same, ie. firstName: firstName, you don't need to write it all out
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);


// Destructuring

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John'
    }
};

const { 
    id: todoId, 
    title, 
    user: { name } 
} = todo;

console.log(todoId);

// Destructure arrays
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);