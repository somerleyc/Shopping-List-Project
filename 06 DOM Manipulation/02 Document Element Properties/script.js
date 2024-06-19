let output;

// output = document.all; // gives everything in source, deprecated so not in use
// output = document.all[11]; // specifying what to get
// output = document.all.length; // gives length of list of everything in source

// output = document.documentElement; // gives everything in HTML element

// output = document.head; // gives everything in HTML head
// output = document.body; // gives everything in HTML body

// output = document.head.children; // gives every child of head
// output = document.body.children; // gives every child of body

// output = document.doctype; // gives the doctype - in this case HTML
// // output = document.domain; // obviously gives domain, but is deprecated so not in use
// output = document.URL; // gives page URL
// output = document.characterSet;
// output = document.contentType; // gives text/html in this case

// output = document.forms; // gives any forms in code
// output = document.forms[0]; // gives specific form
// output = document.forms[0].id; // gives id of specific form
// output = document.forms[0].method; // gives method which is get unless otherwise specified
// output = document.forms[0].action; // gives where it submits to

// document.forms[0].id = 'new-id'; // sets new id

// output = document.links; // gives list of all links
// output = document.links[0]; // gives specific link
// output = document.links[0].href; // gives full link http
// output = document.links[0].href = 'https://facebook.com'; // changes href 
// output = document.links[0].id = 'google-link'; // gives new id to link
// output = document.links[0].className = 'google-class'; // gives new class id to link
// output = document.links[0].classList; // returns list of classes

// output = document.images; // gives collection of images
// output = document.image[0]; // gives first image
// output = document.image[0].src; // gives source of image

// document. returns HTMLCollection which is like an array but doesn't function the same way
// document.forms.forEach((form) => console.log(form)); // doesn't work because document.forms is HTMLCollection not array

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form)); // this turns the HTMLCollection into an array to use it like that

console.log(output);