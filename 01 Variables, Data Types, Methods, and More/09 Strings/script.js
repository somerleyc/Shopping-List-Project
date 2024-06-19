let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals (aka Template Strings)
x = `Hello, my name is ${name} and I am ${age} years old`;

// String Properties and Methods
const s = new String('Hello World');

x = typeof s;

x = s.length;

// Access value by key
x = s[0];

x = s.__proto__;
// make all upper case
x = s.toUpperCase();
// make all lower case
x = s.toLowerCase();

// Same as access value by key above
x = s.charAt(0);
//what key is d
x = s.indexOf('d');
// a string within a string
x = s.substring(0, 4);

x = s.substring(7);
// essentially same as substring but can work with negative numbers
x = s.slice(-11, -6);

x = '       Hello World';
// clears white space
x = x.trim();
// replaces a string
x = s.replace('World', 'John');

x = s.includes('Hell');

x = s.valueOf();
// splits it between the o value
x = s.split('o');
// splits after every character
x = s.split('');

console.log(x);