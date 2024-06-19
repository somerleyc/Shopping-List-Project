const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// use event delegation to add a single listener to the parent and target which element we want to delete
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    };
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color ='red';
    };
});  