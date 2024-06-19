const x = 100;

if (true) {
   const y = 200;
   console.log(x + y);
}

// console.log(x + y); doesn't work because y is not global

// simple for loop
for (let i = 0; i <= 10; i++) {
   console.log(i);
}

// console.log(i); doesn't work because it's global


if (true) {
   const a = 500;
   let b = 600;
   var c = 700;
}

console.log(c);
// var is not block scoped, so it's accessible from outside - don't really want this


function run() {
   var d = 100;
   console.log(d);
}

run();
// var is function scoped. can't access var variable inside function from outside.


const foo = 1;
var bar = 2;
// var gets added to window object, const and let do not