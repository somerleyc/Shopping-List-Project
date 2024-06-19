console.log(10 > 20 && 30 > 15 && 40 > 30);           // not true because it's false true true
console.log(10 > 20 || 30 > 15);                         // true because at least one is true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['Post one', 'Post two'];
posts.length > 0 && console.log(posts[0]);     //if posts.length > 0 is false it doesn't show because there's nothing there


// || - Will return first truthy value or the last value
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);


// ?? (nullish coalescing operator) - Returns the right-side operand when the left is either null or undefined
let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;    // returns 0 because it's looking for specifically null or undefined

console.log(c);