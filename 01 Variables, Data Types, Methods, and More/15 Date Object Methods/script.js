let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

// gives year
x = d.getFullYear();
// gives month (zero start, so + 1)
x = d.getMonth() + 1;
// gets date number
x = d.getDate();
// gets day of the week
x = d.getDay();
// gets hour (24hr)
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;


// Intl.DateTimeFormat
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);
// specifies month and types it out in name
x = Intl.DateTimeFormat('en-US', {month: 'long'}).format(d);
// specifies month and types it out in shortened name (Jun for June)
x = d.toLocaleString('default', {month: 'short'});


// Date Time Format API
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Australia/Melbourne'
});

console.log(x);