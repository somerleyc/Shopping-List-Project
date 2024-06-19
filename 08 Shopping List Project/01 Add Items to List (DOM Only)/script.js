// Shopping List Project Specs
    // Add items to list via form
    // Remove items from list by clicking 'x' button
    // Clear all items with 'clear' button
    // Filter the items by typing in the filter field
    // Add localStorage to persist items
    // Click on an item to put into 'edit mode' and add to form
    // Update item
    // Deploy to Netlify

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    // Validate Input
    if (newItem === '') {
    alert('Please add an item');
    return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
    
    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Event Listeners
itemForm.addEventListener('submit', addItem);