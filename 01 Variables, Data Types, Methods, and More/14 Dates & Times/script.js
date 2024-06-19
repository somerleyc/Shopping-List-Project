let d;

d = new Date();

d = d.toString();
// year, month, day. month is zero based, so January is 0, February is 1, etc
d = new Date(2021, 6, 10, 12, 30, 0);
// year, month, day. month is no longer zero based.
d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
// if you do this way it might be a day earlier due to time zone changes
d = new Date('2022-07-10');
// if you do this way it won't matter about time zone changes
d = new Date('07-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// integer that represents the number of seconds that have passed since Jan 1 1970
// timestamp in JavaScript is expressed in milliseconds 
d = Date.now();

//to get timestamp of specific date
d = new Date('07-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();

//to get specific date from timestamp
d = new Date(1657420200000);

// to convert JavaScript timestamp from milliseconds to seconds
d = Math.floor(Date.now() / 1000);

console.log(d);