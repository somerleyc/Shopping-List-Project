// Used to reduce an array down to a single value
// Good example of use case is a shopping cart. You want to reduce the values of every item in the cart to a single value for payment.

// previousValue is what's returned from the last iteration/function that ran. Also called the accumulator.
// currentValue is the current element we're on
// initialValue is whatever you want the initial previousValue to be. Most cases set to zero.

// Ex 1:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);

// long version
const sum2 = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// Using a for loop
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}

console.log(sum3());


// Ex 2:
const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
];

const totalPrice = cart.reduce((acc, product) => acc + product.price, 0)

console.log(totalPrice);