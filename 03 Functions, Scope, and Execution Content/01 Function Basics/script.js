// function is a way to group code together, makes it more readable and easier to understand
// define/declare function
 function sayHello() {
    console.log('Hello World');
 }
// invoke/call a function
 sayHello();

// when defining/declaring function () are parameters
 function add(num1, num2) {
    console.log(num1 + num2);
  }

  // when you invoke/call a function () are arguments
  add(5, 10);

  function subtract(num1, num2) {
    return num1 - num2;
    }

subtract(10, 2);

const result = subtract(10, 2);

console.log(result, subtract(20, 5));