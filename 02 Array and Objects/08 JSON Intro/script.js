// JSON (JavaScript Object Notation)
// api.github.com/users example JSON objects

const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
};

// Convert to JSON string
// stringify is used for local storage, can only store strings
// must be parsed to object for logging
const str = JSON.stringify(post);

// Parse JSON
// takes the string and parses it to an object
const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body'
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);