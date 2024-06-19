let i = 0;

while (i <= 20) {
    console.log('Number ' + i);
    i++;
}

// use a for loop when you know the number of times that you want the loop to run, and to use a while loop when the number of times the loop will run is unknown - not mandatory but very common


// Loop over arrays
let j = 0;
const arr = [10, 20, 30, 40, 50];

while (j < arr.length) {
    console.log(arr[j]);
    j++;
}


// Nesting while loops
let k = 1;

while (k <= 5) {
    console.log('Number ' + k);

    let l = 1;
    while (l <= 5) {
        console.log(`${k} * ${l} = ${k * l}`);
        l++
    }

    k++;
}


// do while loops always run at least once even if the condition is false - use if you want the code to run at least once even if condition is never met
m = 21;

do {
    console.log('Number ' + m);
    m++;
} while (m <= 20);