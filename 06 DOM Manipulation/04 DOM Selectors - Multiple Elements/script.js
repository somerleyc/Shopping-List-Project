// querySelectorAll()

const listItems = document.querySelectorAll('.item');  // selects class 'item'

// console.log(listItems); // gives NodeList which is an array-like structure, like HTMLCollection
// console.log(listIems[1].innerText); // gives second element text

// listItems[1].style.color = 'red'; // won't work

// listItems.forEach((item, index) => {
//     item.style.color = 'red';     // changes color of text

//     if (index === 1) {
//         item.remove();    // removes second item from list
//     }

//     if (index === 0) {
//         item.innerHTML = `Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;    // changes first item to Oranges, including button
//     }
// });


const listItems2 = document.getElementsByClassName('item');  // creates HTMLCollection of 'item' class

console.log(listItems2[2].innerText);  // can give text but can't be used like an array

const listItemsArray = Array.from(listItems2);  // turn listItems2 HTMLCollection to an array

listItemsArray.forEach((item) => {
    console.log(item.innerText);
});   // now it responds like an array



const listItems3 = document.getElementsByTagName('li');  // creates HTMLCollection of 'li' tags
console.log(listItems3);  // again, HTMLCollection
