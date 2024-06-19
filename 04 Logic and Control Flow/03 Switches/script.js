// Switches are most commonly used with immediate values, such as checking the month directly.
const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
    case 1:
        console.log('It is January');
        break;
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
        break;
    default:
        console.log('It is not January, February, or March');
}

// You can use switch with ranges, like the examples in previous section using hours, like this
switch (true) {
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour < 18:
        console.log('Good Afternoon');
        break;
    default:
        console.log('Good Night');
}

// Good use case for switch is where you have 5, 6, 7, plus else-if statements