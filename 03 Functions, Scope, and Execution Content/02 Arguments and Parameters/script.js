// function registerUser(user) {
//    return user + ' is registered';
// }

// console.log(registerUser('John'));
// // 'user' exists within function scope. 'user' doesn't exist in global scope

// function registerUser(user) {
//    if (!user) {
//       user = 'Bot';
//    }

//    return user + ' is registered';
// }
// // 'user' if undefined is now assigned 'Bot'

function registerUser(user = 'Bot') {
   return user + ' is registered';
}

console.log(registerUser());
// 'Bot' is the default parameter


// Rest Parameters
function sum(...numbers) {
   let total = 0;

   for (const num of numbers) {
      total += num;
   }

   return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100));


// Objects as parameters
function loginUser(user) {
   return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

//solution 1
const user = {
   id: 1,
   name: 'John',
};

console.log(loginUser(user));

//solution 2
console.log(
   loginUser({
      id: 2,
      name: 'Sara',
   })
);


// Arrays as parameters
function getRandom(arr) {
   const randomIndex = Math.floor(Math.random() * arr.length);

   const item = arr[randomIndex];

   console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);