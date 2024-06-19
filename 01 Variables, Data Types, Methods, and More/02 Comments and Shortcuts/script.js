// This is a single line of code

/*
Multi-line comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);
*/

const x = 100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({name: 'Brad', email: 'brad@gmail.com' });

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');    
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello World', styles);