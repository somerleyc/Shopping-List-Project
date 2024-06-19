// // Global scope variables accessible from anywhere. Browser has window object that has a ton of methods and properties accessible from anywhere.
// window.alert('Hello');
// // window is the top-most object we don't need to do window.
// alert('Hello');
// // also works

const x = 100;

console.log(x, 'in global');

function run() {
   console.log(window.innerHeight);
   console.log(x, 'in function');
}

run();

if (true) {
   console.log(x, 'in block');
}

// functions have their own scope
// variables defined within the function scope override global scope, so x = 1 overrides x = 100. this is called variable shadowing.
// local scope refers to whatever scope you're discussing
function add() {
   const x = 1;
   const y = 50;
   console.log(x + y);
}

add();