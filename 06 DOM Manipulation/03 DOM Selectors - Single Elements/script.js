// document.getElementById()

console.log(document.getElementById('app-title')); // returns code
console.log(document.getElementById('app-title').id); // returns just the ''
console.log(document.getElementById('app-title').class); // doesn't work because class is not a property here
console.log(document.getElementById('app-title').className); // does work but not here because there's no class
console.log(document.getElementById('app-title').getAttribute('id'));

// Set Attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title'); // setAttribute('what you want to set', 'what to set it to');

const title = document.getElementById('app-title'); //if doing this a lot, make a const for it

console.log(title);

// Get/change/add content within the element
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again'; // more commonly used
title.innerHTML = '<strong>Shopping List</strong>';

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()
// selects first one if there are more than one

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple juice';
secondItem.style.color = 'red';

// Use  these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';