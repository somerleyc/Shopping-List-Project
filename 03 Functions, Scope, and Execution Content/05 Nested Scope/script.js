// can access parent variables from within the child. doesn't work other way around.

function first() {
   const x = 100;

   function second() {
      const y = 200;
      console.log(x + y);
   }

   second();
};

first();

//same with if statements
if (true) {
   const x = 100;

   if (x === 100) {
      const y = 200;
      console.log(x + y);
   }
};