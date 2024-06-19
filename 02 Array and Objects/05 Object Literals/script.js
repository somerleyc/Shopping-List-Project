let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main Street',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sports']
};

// to pull data from person
x = person.name;
x = person['age'];
// to pull specific data from keys inside keys
x = person.address.state;
// to pull specific data from array
x = person.hobbies[0];

person.name = 'Jane Doe';
person['isAdmin'] = false;

// to permanently remove a property
delete person.age;

// add property
person.hasChildren = true;

// add a function as a property
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// if using space between words for keys, you have to use brackets when executing
const person2 = {
    'first name': 'Brad',
    'last name': 'Traversy',
}

x = person2['first name'];

console.log(x);