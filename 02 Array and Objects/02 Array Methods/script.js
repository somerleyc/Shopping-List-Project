let x;

const arr = [34, 55, 95, 20, 15];
// add on to end of array
arr.push(100);
// take off value from end of array
arr.pop();
// add on to start of array
arr.unshift(99);
// take off from start of array
arr.shift();
// reverse order of array
// arr.reverse();

// boolean answer if value is in array
x = arr.includes(20); //true
x = arr.includes(30); //false
// gives which position () is at
// if gives -1 means () does not exist in array
x = arr.indexOf(15);
// takes a section of the array, () value and everything after, or specify end ()
x = arr.slice(1, 4);
// changes array - plucks out () from array, deleting them from original
// x = arr.splice(1, 4);
// removes single element from array
// x = arr.splice(3, 1);

// takes out section from array, reverses it, turns it into a string, gives first character
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);