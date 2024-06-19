const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My element');

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);    // puts it at the end of the body HTML 

document.querySelector('ul').appendChild(div);