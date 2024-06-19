let output;
// Get child elements

const parent = document.querySelector('.parent');
output = parent.children; // gives HTMLCollection of all child divs
output = parent.children[1]; // gives specific child div
output = parent.children[1].innerText; // gives name of specific child div
output = parent.children[1].className; // gives name of specific child div class
output = parent.children[1].nodeName; // gives name of specific child node 'DIV'

parent.children[1].innerText = 'Child Two'; // changes name
parent.children[1].style.color = 'red'; // changes color of text

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';


// Get parent elements from a child
const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';


// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)'); // gives second item from (2)

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.previousElementSibling.style.color = 'orange'; // makes prev to secondItem orange
secondItem.nextElementSibling.style.color = 'green'; // makes next to secondItem green

console.log(output);