const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
    // class name
    console.log(itemList.className);
    text.className = 'card dark';

    // // class list
    console.log(itemList.classList);  // gives DOMTokenList - can use forEach etc
    itemList.classList.forEach(c => console.log(c));

    // text.classList.add('dark');
    // text.classList.remove('card'); // removes padding

    // text.classList.toggle('dark');   // good for dark/light switch
    // text.classList.toggle('hidden');

    // text.classList.replace('card', 'dark');

    //Change style
    itemList.style.lineHeight = '3';

    items.forEach((item, index) => {
        item.style.color = 'red';

        if (index === 2) {
            item.style.color = 'blue';
        }
    });
}


console.log('hello');
document.querySelector('button').onclick = run;
