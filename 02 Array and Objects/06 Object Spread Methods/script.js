let x;

//nesting refresh
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232
        }
    }
};

x = person.address.coords.lat;


const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
//spread refresh - both do same thing, spread is easier/modern
const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);


// Arrays of objects
const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Pickup kids from school'},
    {id: 3, name: 'Take out trash'},
];

x = todos[0].name;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

// get all keys and put into array
x = Object.keys(todo);

// get number of keys
x = Object.keys(todo).length;

// get array of values
x = Object.values(todo);

// get array of key value pairs
x = Object.entries(todo);

// give boolean indicating if object has specific property
x = todo.hasOwnProperty('name'); //true
x = todo.hasOwnProperty('age'); //false

console.log(x);