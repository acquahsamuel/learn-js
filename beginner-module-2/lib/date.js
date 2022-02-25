const dates = new Date();
console.log(dates);

console.log(typeof dates);

// Year , months , day , times
console.log('getFullYear : ' , dates.getFullYear());
console.log('getMonth : ' , dates.getMonth());
console.log('getDate : ' , dates.getDate());
console.log('getDay : ' , dates.getDay());
console.log('getHours : ' , dates.getHours());
console.log('getMinutes : ' , dates.getMinutes());
console.log('getSeconds : ' , dates.getSeconds());
console.log('getMillseconds : ' , dates.getMilliseconds());


// Timestamps 
console.log('TimeStamp : ' , dates.getTime());

// Date Strings 
console.log(dates.toDateString());
console.log(dates.toTimeString());
console.log(dates.toLocaleDateString());
console.log(dates.toISOString());


// Handling Dates with timestamps
const before = new Date('February 1 2019 7:30:59');
const now   = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`this blog was written on ${days}  ago`);


// Converting timestamps into dates Object
const timestamps = 1675938474990;
console.log(new Date(timestamps));