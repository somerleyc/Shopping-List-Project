// Array.forEach takes in a function as an argument, called a callback function. In that callback function we can pass in a variable for each element/item in that array.
// forEach simply loops through, it doesn't return anything

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// console.log(socials.__proto__);

// Ex 1
// socials.forEach(function (item) {
//     console.log(item);
// });


// Ex 2
// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));


// Ex 3
// function logSocials(social) {
//     console.log(social);
// }

// socials.forEach(logSocials);


// Ex 4
const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
];

socialObjs.forEach((item) => console.log(item.url));