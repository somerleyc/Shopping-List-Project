// DOM = Document Object Model. Programming interface for web/HTML elements. Structure that we can interact with via JavaScript. Includes tags, attributes, text nodes, etc.

// console.log(window); // shows the window object with all the properties
// console.log(window.document); // shows the element
// console.dir(document) // shows the properties and methods

// console.log(document.body); // shows everything in the body
// console.log(document.body.innerHTML); // shows just HTML
// console.log(document.body.innerText); // shows just the text
// console.log(document.links); // shows all links
// console.log(document.links[0]); // specifies which link to use

// document.body.innerHTML = '<h1>Hello World</h>'; // replaces everything on page with Hello World
// document.write('Hello from JS'); // puts text on page

// to replace specific element. this replaces everything in the div 'main' with whatever specified
console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = '<h1>Hello from main</h>';

// also replaces specific element
document.querySelector('#main h1').innerText = 'Hello';