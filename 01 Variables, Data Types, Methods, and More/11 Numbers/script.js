let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;
// using toFixed on a number turns it into a string representation of a decimal
x = num.toFixed(2);
// using toPrecision on a number turns it into a string of (x) characters
x = num.toPrecision(3);

x = num.toExponential(2);
// toLocaleString changes character language
x = num.toLocaleString('as-JP');
// valueOf just gives value 
x = num.valueOf();
// MAX_VALUE gives biggest number possible to use
x = Number.MAX_VALUE;
// MIN_VALUE gives lowest number possible to use
x = Number.MIN_VALUE;

console.log(x);