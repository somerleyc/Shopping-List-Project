let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;  // gives NodeList including all children (text, comment, div, etc). Probably won't be doing it this way unless you need to access text nodes
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].innerHTML;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One'; // more difficult to figure out which [] to access because there's so many different types of nodes
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello'; // replaces text node, which was white space, with 'Hello'

// Parent node
const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement; // works same as above

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Sibling nodes
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);