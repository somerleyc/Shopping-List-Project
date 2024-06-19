// For looping through object literals
// Ex 1
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

// Ex 2
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}