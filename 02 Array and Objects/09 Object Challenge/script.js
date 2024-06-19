let x; 

//Step One
const library = [
    {
        title: 'Murderbot',
        author: 'Martha Wells',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Ancillary Justice',
        author: 'Ann Leckie',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: 'Monk & Robot',
        author: 'Becky Chambers',
        status: {
            own: true,
            reading: false,
            read: false,
        }
    }
];

// Step Two
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step Three
const { title: firstBook } = library[0];

console.log(library);

// Step Four
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);