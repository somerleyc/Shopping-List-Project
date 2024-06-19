// Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them. Examples include clicking on an element, typing into a text field, hovering over an element, submitting a form, closing a window, dragging an element, resizing an element, etc.

const clearBtn = document.querySelector('#clear');


// JavaScript Event Listener - not recommended
// clearBtn.onclick = function () {
    //     alert('Clear items');
    // }
    
// clearBtn.onclick = function () {
//     console.log('Clear Items');
// } // if you have more than one of these 'clearBtn.onclick' then only the last one will run. addEventListener you can have multiple - makes it better

// addEventListener method - recommended, modern, good
// (type of event, callback function)
// clearBtn.addEventListener('click', () => alert('Clear items'));
// clearBtn.addEventListener('click', () => console.log('Clear items'));
        
        
// function onClear() {
//     alert('Clear items');
// }

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear),5000);  // after 5 seconds (5000 milliseconds) button won't click

// setTimeout(() => clearBtn.click(), 5000); // after 5 seconds, pop up happens

function clearList() {
    const itemList = document.querySelector('ul');
    const items = document.querySelectorAll('li');

    // itemList.innerHTML = '';
    // items.forEach((item) => item.remove());
    
    // fancy way of doing it one-by-one instead of whole list at once
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}


clearBtn.addEventListener('click', clearList);