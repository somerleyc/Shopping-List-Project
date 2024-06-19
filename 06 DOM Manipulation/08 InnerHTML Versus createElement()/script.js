// Quick & Dirty
function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

    document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
    const li = document.createElement('li'); // creates list item
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');  // creates button
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');   // creates icon for button
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);  // puts icon inside button
    li.appendChild(button);  // puts button inside list item

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');
createNewItem('Cheese');