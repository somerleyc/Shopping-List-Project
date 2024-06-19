// Challenge 1:
// function getCelsius(temperature) {
//     return (temperature - 32) * 5 / 9;
// };

// bonus points, write above as one line arrow function
const getCelsius = temperature => (temperature - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);


// Challenge 2:
function minMax(arr) {
    const a = Math.min(...arr);
    const b = Math.max(...arr);
    return `min: ${a}, max: ${b}`;
};

console.log(minMax([1, 2, 3, 4, 5]));



// Challenge 3:
(function (length, width) {
    const area = length * width;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
    console.log(output);
})(10, 5);

