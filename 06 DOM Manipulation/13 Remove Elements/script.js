function removeClearButton() {
    // document.querySelector('#clear').remove();

    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();   // does same as above
}

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// removes specific item
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`)

    ul.removeChild(li);
}

// other way of removing specific item
function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

// using remove not removeChild
function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

// shortened above
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(2);
// removeItem2(2);
// removeItem3(3);
removeItem4(1);