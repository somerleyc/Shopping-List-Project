// insertAdjacentElement example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText example
function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('beforebegin', 'insertAdjacentText above');
    item.insertAdjacentText('afterend', 'insertAdjacentText below');
}

// insertAdjacentHTML example
function insertHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML above</h2>');
    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML below</h2>');
}

// insertBefore example
function insertBeforeItem() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();


/*
<!--beforebegin-->
<p>
    <!--afterbegin-->
    foo
    <!--beforeend-->
</p>
<!--afterend-->
*/