(function() {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
}) ();

// variable user now works in both files because one is global (otherscript.js) and the other is within the function.

(function (name) {
    console.log('Hello ' + name);
})('Shawn');

(function hello() {
    console.log('Hello');
})();