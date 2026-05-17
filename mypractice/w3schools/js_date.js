// Date Object
// The date object works with dates and Time

// Date objects are created with new Date()

// Examples:
let time = new Date();

// JavaScript Date Methods and Properties:


// new Date()	Creates a new Date object
Example
// Create a Date
let time1 = new Date();

// Description
// The new Date() constructor creates a new Date object.

// Syntax
// new Date(date)
// Parameters
// Parameter	Description
// date	Optional: A timestamp (milliseconds) or a date time string.

// Return Value
// Type	Description
// Date	A new Date object.


/*
 * 
 */
// constructor	Creates a new Date object

// Example
// Get the Date constructor:

const d = new Date();
let text = d.constructor;



// Description
// The date constructor property returns the function that created the Date prototype.

// For JavaScript dates the constructor property returns:

// function Date() { [native code] }

// Syntax
// Date.constructor



// Return Value
// function Date() { [native code] }
/*
 * 
 */

// getDate()	Returns the day of the month (from 1-31)
Examples
Get the day of the month:

const d = new Date();
let day = d.getDate();

Description
The getDate() method returns the day of the month (1 to 31) of a date.

Syntax
Date.getDate()
Parameters
No parameter changes
Return Value
Type	Description
A number	The day of the month (1 to 31).

example:

const d = new Date();   // Create a new Date object with the current date and time
let day = d.getDate();  // Get the day of the month (1-31) from the Date object

console.log(day);  // Output: (will vary depending on the current date)

/*
 * 
 */
// getDay()	Returns the day of the week (from 0-6)
Examples
Get the day of the week:

const d = new Date();
let day = d.getDay();

or

Get the day of the week of a specific date:

const d = new Date("July 21, 1983 01:15:00");
let day = d.getDay();

Description
The getDay() method returns the day of the week (0 to 6) of a date.

Sunday = 0, Monday = 1, ... (See below):

Syntax
Date.getDay()
Parameters
No parameter changes
Return Value
Type	Description
A number	The day of the week (0 to 6).


const d = new Date();    // Create a new Date object with the current date and time
let dayOfWeek = d.getDay();  // Get the day of the week (0-6)

console.log(dayOfWeek);  // Output: (will vary depending on the current day of the week)


/*
 * 
 */

// getFullYear()	Returns the year

Examples
Get the year:

const d = new Date();
let year = d.getFullYear();

Get the year of a specific date:

const d = new Date("July 21, 1983 01:15:00");
let year = d.getFullYear();

Description
getFullYear() returns the full year of a date.

Syntax
Date.getFullYear()
Parameters
No parameter changes
Return Value
Type	Description
A number	The year of the date.
(4 digits for dates between year 1000 and 9999).

const d = new Date();       // Create a new Date object with the current date and time
let year = d.getFullYear(); // Get the full year (e.g., 2024)

console.log(year); // Output: 2024 (or the current year)


/*
 * 
 */

// getHours()	Returns the hour (from 0-23)
Examples
Get the hours:

const d = new Date();
let hour = d.getHours();
Description
getHours() returns the hour (0 to 23) of a date.

Syntax
Date.getHours()
Parameters
No parameter changes
Return Value
Type	Description
A number	The local time hour (0 to 23).

const d = new Date();       // Create a new Date object with the current date and time
let hours = d.getHours();   // Get the current hour (0-23)

console.log(hours);         // Output: (current hour in 24-hour format)


// getMilliseconds()	Returns the milliseconds (from 0-999)
Examples
Get the milliseconds:

const d = new Date();
let ms = d.getMilliseconds();

Get the milliseconds of a specific date:

const d = new Date("July 21, 1983 01:15:00.250");
let ms = d.getMilliseconds();

Description
getMilliseconds() returns the milliseconds (0 to 999) of a date.

Syntax
Date.getMilliseconds()
Parameters
No parameter changes
Return Value
Type	Description
A number	The milliseconds of the date (0 to 999).


const d = new Date();            // Create a new Date object with the current date and time
let milliseconds = d.getMilliseconds();  // Get the current milliseconds (0-999)

console.log(milliseconds);       // Output: (current milliseconds)


// getMinutes()	Returns the minutes (from 0-59)

Examples
Get the minutes:

const d = new Date();
let minutes = d.getMinutes();

Get the minutes of a specific date:

const d = new Date("July 21, 1983 01:15:00");
let minutes = d.getMinutes();

Description
getMinutes() returns the minutes (0 to 59) of a date.

Syntax
Date.getMinutes()
Parameters
No parameter changes
Return Value
Type	Description
A number	The minutes of the date (0 to 59).

const d = new Date("July 21, 1983 01:15:00");
let minutes = d.getMinutes();

console.log(minutes); // Output: 15

// getMonth()	Returns the month (from 0-11)
Examples
Get the month:

const d = new Date();
let month = d.getMonth();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

Description
getMonth() returns the month (0 to 11) of a date.

January =0, February = 1, ... (see below):

Syntax
Date.getMonth()
Parameters
No parameter changes
Return Value
Type	Description
A number	The month of the date (0 to 11).

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];

console.log(name); // Output: (current month's name, e.g., "June")


// getSeconds()	Returns the seconds (from 0-59)
Examples
Get the seconds:

const d = new Date();
let seconds = d.getSeconds();

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
  const d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let time = h + ":" + m + ":" + s;

Description
getSeconds() returns the seconds (0 to 59) of a date.

Syntax
Date.getSeconds()
Parameters
No parameter changes
Return Value
Type	Description
A number	The seconds of the date (0 to 59).


const d = new Date();         // Create a new Date object with the current date and time
let seconds = d.getSeconds(); // Get the current seconds (0-59)

console.log(seconds);         // Output: (current seconds)


// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
const d = new Date();
let time = d.getTime();

// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const d = new Date();
let years = Math.round(d.getTime() / year);

Description
getTime() returns the number of milliseconds since January 1, 1970 00:00:00.

Syntax
Date.getTime()
Parameters
No parameter changes
Return Value
Type	Description
A number	Number of milliseconds since January 1, 1970 00:00:00.

const d = new Date();        // Create a new Date object with the current date and time
let timeInMillis = d.getTime();  // Get the time value in milliseconds

console.log(timeInMillis);   // Output: (numeric value representing the current time in milliseconds)



// getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
Example
Get the difference between UTC time and local time:

const d = new Date();
let diff = d.getTimezoneOffset();

Description
getTimezoneOffset() returns the difference between UTC time and local time.

getTimezoneOffset() returns the difference in minutes.

For example, if your time zone is GMT+2, -120 will be returned.

Syntax
Date.getTimezoneOffset()
Parameters
No parameter changes
Return Value
Type	Description
A number	The time difference between UTC and Local Time in minutes.


const d = new Date();                  // Create a new Date object with the current date and time
let offsetMinutes = d.getTimezoneOffset();  // Get the timezone offset in minutes

console.log(offsetMinutes);            // Output: (timezone offset in minutes)



// getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
Examples
Get the UTC day:

const d = new Date();
let day = d.getUTCDate();

Get the UTC day of the month from a specific, local date-time:

const d = new Date("July 21, 1983 01:15:00");
let day = d.getUTCDate();

Description
getUTCDate() returns the day of the month (1 to 31) of a date object.

getUTCDate() returns the day according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

All JavaScript getUTC methods assume that the date is of local time.

Syntax
Date.getUTCDate()
Parameters
No parameter changes
Return Value
Type	Description
A number	The day of the month (1 to 31) of a date, according to UTC.

const d = new Date("2024-06-23T12:34:56Z"); // UTC time

let utcDay = d.getUTCDate();
let localDay = d.getDate();

console.log(`UTC Day: ${utcDay}`);   // Output: UTC Day: 23
console.log(`Local Day: ${localDay}`); // Output: Local Day: 23 (based on local timezone)



// getUTCDay()	Returns the day of the week, according to universal time (from 0-6)

Example
Get the weekday:

const d = new Date();
let day = d.getUTCDay();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getUTCDay()];

Description
getUTCDay() returns the day of the week (0 to 6) of a date.

getUTCDay() returns the day of the week according to universal time.

Sunday = 0, Monday = 1, ... (See below):



Syntax
Date.getUTCDay()
Parameters
No parameter changes
Return Value
Type	Description
A number	The weekday of a date (0 to 6), according to UTC.

const d = new Date("July 21, 1983");

let utcDayOfWeek = d.getUTCDay();

console.log(utcDayOfWeek); // Output: 4


// getUTCFullYear()	Returns the year, according to universal time
Examples
const d = new Date();
let year = d.getUTCFullYear();

Get the full UTC year from a specific date:

const d = new Date("July 21, 1983 01:15:00");
let year = d.getUTCFullYear();

Description
getUTCFullYear() returns the year of a date.

getUTCFullYear() returns the year according to UTC.

getUTCFullYear() returns four digits for years between 1000 and 9999.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

All JavaScript getUTC methods assume that the date is of local time.

Syntax
Date.getUTCFullYear()
Parameters
No parameter changes
Return Value
Type	Description
A number	The year of the date.

const d = new Date("July 21, 1983");

let utcFullYear = d.getUTCFullYear();

console.log(utcFullYear); // Output: 1983


// getUTCHours()	Returns the hour, according to universal time (from 0-23)

Examples
Get the UTC hours:

const d = new Date();
let hour = d.getUTCHours();

Get the UTC hours from a specific date:

const d = new Date("July 21, 1983 01:15:00");
let hour = d.getUTCHours();

Description
getUTCHours() returns the hour (0 to 23) of a date.

getUTCHours() returns the hour according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

All JavaScript getUTC methods assume that the date is of local time.

Syntax
Date.getUTCHours()
Parameters
No parameter changes
Return Value
A number.

The hour of a date (0 to 23).

const d = new Date("July 21, 1983 01:15:00");
let hour = d.getUTCHours();

console.log(hour); // Output: 1




// getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)

Examples
Get the UTC milliseconds:

const d = new Date();
let ms = d.getUTCMilliseconds();

Get the UTC milliseconds from a specific date:

const d = new Date("July 21, 1983 01:15:00.250");
let ms = d.getUTCMilliseconds();

Description
getUTCMilliseconds() returns the milliseconds (0 to 999) of a date.

getUTCMilliseconds() returns the milliseconds according to UTC.

Syntax
Date.getUTCMilliseconds()
Parameters
No parameter changes
Return Value
Type	Description
A number	The milliseconds of the date (0 to 999).

const d = new Date("July 21, 1983 01:15:00.250");
let ms = d.getUTCMilliseconds();

console.log(ms); // Output: 250



// getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)

Examples
Get the UTC minutes:

const d = new Date();
let minutes = d.getUTCMinutes();

Get the UTC minutes from a specific date:

const d = new Date("July 21, 1983 01:15:00");
let minutes = d.getUTCMinutes();

Description
getUTCMinutes() returns the minutes (0 to 59) of a date.

getUTCMinutes() returns the minutes according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

All JavaScript getUTC methods assume that the date is of local time.

Syntax
Date.getUTCMinutes()
Parameters
No parameter changes
Return Value
Type	Description
A number	The minutes of a date (0 to 59).

const d = new Date("July 21, 1983 01:15:00");
let minutes = d.getUTCMinutes();

console.log(minutes); // Output: 15




// getUTCMonth()	Returns the month, according to universal time (from 0-11)
Examples
Get the month, according to universal time:

const d = new Date();
let month = d.getUTCMonth();


Get the name of the month (not just a number):

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date()
let month = month[d.getUTCMonth()];

Description
getUTCMonth() returns the month (0 to 11) of a date.

getUTCMonth() returns the month according to UTC.

January = 0, February = 1, ... (See below):

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

All JavaScript getUTC methods assume that the date is of local time.

Syntax
Date.getUTCMonth()
Parameters
No parameter changes
Return Value
Type	Description
A number	The month of the date (0 to 11).

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let currentMonth = months[d.getUTCMonth()];

console.log(currentMonth); // Output: (current month name based on UTC)



// getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
Examples
Get UTC seconds:

const d = new Date();
let seconds = d.getUTCSeconds();


Using getUTC methods to display the universal time:

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

const d = new Date();
let h = addZero(d.getUTCHours());
let m = addZero(d.getUTCMinutes());
let s = addZero(d.getUTCSeconds());
let time = h + ":" + m + ":" + s;

Description
getUTCSeconds() returns the seconds (0 to 59) of a date.

getUTCSeconds() returns the seconds according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

All JavaScript getUTC methods assume that the date is of local time.

Syntax
Date.getUTCSeconds()
Parameters
No parameter changes
Return Value
Type	Description
A number	The seconds of the date (0 to 59).

// Create a Date object for the current date and time in UTC
let currentDate = new Date();

// Get the hours component in UTC
let hours = currentDate.getUTCHours();

// Display the UTC hours
console.log('Current UTC Hours:', hours);



// getYear()	Deprecated. Use the getFullYear() method instead



// now()	Returns the number of milliseconds since midnight Jan 1, 1970
Examples
let ms = Date.now();

Calculate the number of years since 1970/01/01:

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

Description
Date.now() returns the number of milliseconds since January 1, 1970.

Notes
Date.now() is a static method of the Date object.

You cannot use it on a date like myDate.now()

The syntax is always Date.now().

Syntax
Date.now()
Parameters
No parameter changes
Return Value
A number.

The number of milliseconds since midnight January 1, 1970 00:00:00 UTC

// Get the current timestamp in milliseconds
let timestamp = Date.now();

// Display the timestamp
console.log('Current Timestamp:', timestamp);


// parse()	Parses a date string and returns the number of milliseconds since January 1, 1970
Example 1
let ms = Date.parse("March 21, 2012");

Description
parse() parses a date string and returns the time difference since January 1, 1970.

parse() returns the time difference in milliseconds.


Syntax
Date.parse(datestring)
Parameters
datestring	Required.
A string representing a date.
Return Value
A number.

Milliseconds since January 1, 1970 00:00:00 UTC.

    // Parse different date formats
    let timestamp1 = Date.parse('2024-06-24'); // Date only (UTC)
    let timestamp2 = Date.parse('June 24, 2024'); // Long date string (local time)
    let timestamp3 = Date.parse('2024/06/24 12:00:00 GMT+0200'); // Date string with timezone

    console.log('Timestamp 1:', timestamp1); // Output: Timestamp 1: 1714617600000
    console.log('Timestamp 2:', timestamp2); // Output: Timestamp 2: 1714694400000
    console.log('Timestamp 3:', timestamp3); // Output: Timestamp 3: 1714723200000



// prototype	Allows you to add properties and methods to an object



Make a new date method that gives the date object a month-name property called myMonth:

Date.prototype.myMonth = function()
{
if (this.getMonth()==0) {return "January"};
if (this.getMonth()==1) {return "February"};
if (this.getMonth()==2) {return "March"};
if (this.getMonth()==3) {return "April"};
if (this.getMonth()==4) {return "May"};
if (this.getMonth()==5) {return "June"};
if (this.getMonth()==6) {return "July"};
if (this.getMonth()==7) {return "August"};
if (this.getMonth()==8) {return "September"};
if (this.getMonth()==9) {return "October"};
if (this.getMonth()==10) {return "November"};
if (this.getMonth()==11) {return "December"};
}
Make a Date object, then call the myMonth method:

const d = new Date();
let month = d.myMonth();

Description
prototype allows you to add new properties and methods to dates.

prototype is a property available with all JavaScript objects.

Syntax
Date.prototype.name = value
Warning
You are not advised to change the prototype of an object that you do not control.

You should not change the prototype of built in JavaScript datatypes like:

Numbers
Strings
Arrays
Dates
Booleans
Function
Objects
Only change the prototype of your own objects.

The prototype Property
The JavaScript prototype property allows you to add new properties to objects:

Example
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

In JavaScript, Date.prototype is not a method that directly returns a value. Instead, it is an object that allows you to extend the behavior of all Date instances through its properties and methods.


While Date.prototype itself does not accept parameters (because it's not a function but an object prototype), the methods defined within Date.prototype do accept parameters as needed. For example:

getMonth(), getFullYear(), getHours(), etc., are methods of Date.prototype that do not require parameters as they operate on the date instance they are called upon.

Methods like setMonth(), setFullYear(), setHours(), etc., accept parameters to set specific values in the Date object.


// setDate()	Sets the day of the month of a date object
Example 1
const d = new Date();
d.setDate(15);

Description
setDate() sets the day of the month of a date.

Example 2
Set the day of the month to the last day of the previous month:

const d = new Date();
d.setDate(0);

Example 3
Set the day of the month in a specified date:

const d = new Date("July 21, 1983 01:15:00");
d.setDate(15);


const d = new Date("July 21, 1983 01:15:00"); // Create a Date object with a specific date and time

d.setDate(15); // Set the day of the month to 15

console.log(d); // Output the updated Date object



Syntax
Date.setDate(day)
Parameters
day	An integer representing the day (1 to 31).
Higher and lower values are handeled with date maths:

0 gives the last day of the previous month
-1 gives the day before the last day of the previous month
32 gives the first day of the next month (if 31 days)
41 gives the tenth day of the next month (if 31 days)
Return Value
A number.

Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.


// setFullYear()	Sets the year of a date object
Example 1
const d = new Date();
d.setFullYear(2020);

Description
setFullYear() sets the year of a date.

setFullYear() can also set month and day.

Syntax
Date.setFullYear(year, month, day)
Parameters
year	Required.
The year. Negative values are allowed.
month	Optional.
The month (0 to 11).
Higher and lower values are handeled with date maths:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
day	Optional.
The day (0 to 31).
Higher and lower values are handeled with date maths:

0 gives the last day of the previous month
-1 gives the day before the last day of the previous month
32 gives the first day of the next month (if 31 days)
41 gives the tenth day of the next month (if 31 days)
Return Value
A number.

Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the year to 2024
d.setFullYear(2024);

// Output the updated Date object
console.log(d);



// setHours()	Sets the hour of a date object

Example 1
const d = new Date();
d.setHours(15);

Description
setHours() sets the hour of a date.

setHours() can also set minutes, seconds and milliseconds.

Syntax
Date.setHours(hour, min, sec, millisec)
Parameters
hour	Required. The Hours.
0 to 23, but other values are allowed:

 -1 gives the last hour of the previous day
24 gives the first hour of the next day
min	Optional. The Minutes.
0 to 59, but other values are allowed:

 -1 gives the last minute of the previous hour
60 gives the first minute of the next hour
sec	Optional. The seconds.
0 to 59, but other values are allowed:

 -1 gives the last second of the previous minute
60 gives the first second of the next minute
millisec	Optional. The milliseconds.
0 to 999, but other values are allowed:

-1 gives the last millisecond of the previous second
1000 gives the first millisecond of the next second
Return Value
A number.

Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the hours to 16 (4 PM)
d.setHours(16);

// Output the updated Date object
console.log(d);

// setMilliseconds()	Sets the milliseconds of a date object
Example
const d = new Date();
d.setMilliseconds(192);
Description
setMilliseconds() sets the milliseconds of a date.
Syntax
Date.setMilliseconds(millisec)
Parameters
millisec	Required. The milliseconds.
(0 to 999), but other values are allowed:

-1 gives the last millisecond of the previous second
1000 gives first millisecond of the next second
1001 gives the second millisecond of the next second
Return Value
A number.

Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the milliseconds to 500
d.setMilliseconds(500);

// Output the updated Date object
console.log(d);


// setMinutes()	Set the minutes of a date object
Example 1
Set the minutes to 17:

const d = new Date();
d.setMinutes(17);

Description
setMinutes() sets the minutes of a date.

This method can also be used to set the seconds and milliseconds.

Syntax
Date.setMinutes(min, sec, millisec)
Parameter Values
Parameter	Description
min	Required. An integer representing the minutes.
Expected values are 0-59, but other values are allowed:

-1 will result in the last minute of the previous hour
60 will result in the first minute of the next hour
sec	Optional. An integer representing the seconds
Expected values are 0-59, but other values are allowed:

-1 will result in the last second of the previous minute
60 will result in the first second of the next minute
millisec	Optional. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the minutes to 45
d.setMinutes(45);

// Output the updated Date object
console.log(d);



// setMonth()	Sets the month of a date object
Example
Set the month to 4 (May):

const d = new Date();
d.setMonth(4);

Description
The setMonth() method sets the month of a date object.

Note: January is 0, February is 1, and so on.

This method can also be used to set the day of the month.

Syntax
Date.setMonth(month, day)
Parameter Values
Parameter	Description
month	Required. An integer representing the month
Expected values are 0-11, but other values are allowed:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
day	Optional. An integer representing the day of month
Expected values are 1-31, but other values are allowed:

0 will result in the last day of the previous month
-1 will result in the day before the last day of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the month to October (0-based index)
d.setMonth(9); // Month is zero-indexed: 9 represents October

// Output the updated Date object
console.log(d);

// setSeconds()	Sets the seconds of a date object
Example
Set the seconds to 35:

const d = new Date();
d.setSeconds(35);

Description
The setSeconds() method sets the seconds of a date object.

This method can also be used to set the milliseconds.

Syntax
Date.setSeconds(sec, millisec)
Parameter Values
Parameter	Description
sec	Required. An integer representing the seconds
Expected values are 0-59, but other values are allowed:

-1 will result in the last second of the previous minute
60 will result in the first second of the next minute
millisec	Optional. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Set both the seconds and milliseconds:

const d = new Date();
d.setSeconds(35, 825);

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the seconds to 30
d.setSeconds(30);

// Output the updated Date object
console.log(d);

If you run the above code, the output will be:
sql
Copier le code
Fri Jun 15 2023 12:00:30 GMT+0000 (Coordinated Universal Time)



// setTime()	Sets a date to a specified number of milliseconds after/before January 1, 1970

Example
Add 1332403882588 milliseconds to January 1, 1970:

const d = new Date();
d.setTime(1332403882588);

Description
The setTime() method sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.

Syntax
Date.setTime(millisec)
Parameter Values
Parameter	Description
millisec	Required. The number of milliseconds to be added to, or subtracted from, midnight January 1, 1970
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Subtract 1332403882588 milliseconds from January 1, 1970:

const d = new Date();
d.setTime(-1332403882588);


// setUTCDate()	Sets the day of the month of a date object, according to universal time
Example
Set the day of the month, according to UTC:

const d = new Date();
d.setUTCDate(15);

Description
The setUTCDate() method sets the day of a Date object, according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

Syntax
Date.setUTCDate(day)
Parameter Values
Parameter	Description
day	Required. An integer representing the day of a month.
Expected values are 1-31, but other values are allowed:

0 will result in the last day of the previous month
-1 will result in the day before the last day of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Set the day of the month to the last day of the previous month:

const d = new Date();
d.setUTCDate(0);


// setUTCFullYear()	Sets the year of a date object, according to universal time
Example
Set the year to 2015:

const d = new Date();
d.setUTCFullYear(2015);

Description
The setUTCFullYear() method sets the year of a date object, according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

Syntax
Date.setUTCFullYear(year, month, day)
Parameter Values
Parameter	Description
year	Required. A value representing the year, negative values are allowed
month	Optional. An integer representing the month
Expected values are 0-11, but other values are allowed:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
day	Optional. An integer representing the day of month
Expected values are 1-31, but other values are allowed:

0 will result in the last hour of the previous month
-1 will result in the hour before the last hour of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month
Return Value
Type	Description
Number	Milliseconds between the date object and midnight January 1 1970


// setUTCHours()	Sets the hour of a date object, according to universal time
Example
Set the hour to 15, according to UTC time:

const d = new Date();
d.setUTCHours(15);

Description
The setUTCHours() method sets the hour of a date object, according to UTC.

It can also be used to set the minutes, seconds and milliseconds.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

Syntax
Date.setUTCHours(hour, min, sec, millisec)
Parameter Values
Parameter	Description
hour	Required. An integer representing the hour.
Expected values are 0-23, but other values are allowed:

-1 will result in the last hour of the previous day
24 will result in the first hour of the next day
min	Optional. An integer representing the minutes.
Expected values are 0-59, but other values are allowed:

-1 will result in the last minute of the previous hour
60 will result in the first minute of the next hour
sec	Optional. An integer representing the seconds
Expected values are 0-59, but other values are allowed:

-1 will result in the last second of the previous minute
60 will result in the first second of the next minute
millisec	Optional. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Set the time to 15:35:01 UTC time

const d = new Date();
d.setUTCHours(15, 35, 1);


// setUTCMilliseconds()	Sets the milliseconds of a date object, according to universal time

Example
Set the milliseconds to 192, according to UTC time:

const d = new Date();
d.setUTCMilliseconds(192);

Description
The setUTCMilliseconds() method sets the milliseconds (from 0 to 999) of a date object, according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).


Syntax
Date.setUTCMilliseconds(millisec)
Parameter Values
Parameter	Description
millisec	Required. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
1001 will result in the second millisecond of the next second
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Set the UTC milliseconds to 500
d.setUTCMilliseconds(500);

// Output the updated Date object
console.log(d);



// setUTCMinutes()	Set the minutes of a date object, according to universal time
Example
Set the minutes to 17, according to UTC time:

const d = new Date();
d.setUTCMinutes(17);

Description
The setUTCMinutes() method sets the minutes of a date object, according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

Syntax
Date.setUTCMinutes(min, sec, millisec)
Parameter Values
Parameter	Description
min	Required. An integer representing the minutes.
Expected values are 0-59, but other values are allowed:

-1 will result in the last minute of the previous hour
60 will result in the first minute of the next hour
sec	Optional. An integer representing the seconds
Expected values are 0-59, but other values are allowed:

-1 will result in the last second of the previous minute
60 will result in the first second of the next minute
millisec	Optional. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
Technical Details
Return Value:	A number.

Number of milliseconds between the date and January 1, 1970 00:00:00 UTC.
More Examples
Example
Set the date time to be 90 minutes ago, using UTC methods:

const d = new Date();
d.setUTCMinutes(d.getUTCMinutes() - 90);




// setUTCMonth()	Sets the month of a date object, according to universal time
Example
Set the month to 4 (May):

const d = new Date();
d.setUTCMonth(4);

Description
The setUTCMonth() method sets the month (from 0 to 11) of a date object, according to UTC.

Note: January is 0, February is 1, and so on.

Syntax
Date.setUTCMonth(month, day)
Parameter Values
Parameter	Description
month	Required. An integer representing the month
Expected values are 0-11, but other values are allowed:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
day	Optional. An integer representing the day of month
Expected values are 1-31, but other values are allowed:

0 will result in the last hour of the previous month
-1 will result in the hour before the last hour of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Set the month to 4 (May) and the day to the 20th:

const d = new Date();
d.setUTCMonth(4, 20);

// setUTCSeconds()	Set the seconds of a date object, according to universal time
Example
Set the seconds to 35, according to UTC time:

const d = new Date();
d.setUTCSeconds(35);

Description
The setUTCSeconds() method sets the seconds of a date object, according to UTC.

It can also be used to set the milliseconds.

Syntax
Date.setUTCSeconds(sec, millisec)
Parameter Values
Parameter	Description
sec	Required. An integer representing the seconds
Expected values are 0-59, but other values are allowed:

-1 will result in the last second of the previous minute
60 will result in the first second of the next minute
millisec	Optional. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Set both the seconds and milliseconds, according to UTC:

const d = new Date();
d.setUTCSeconds(35, 825);



// setYear()	Deprecated. Use the setFullYear() method instead






// toDateString()	Converts the date portion of a Date object into a readable string
Example
Get today's date as a readable string:

const d = new Date();
let text = d.toDateString();

Description
The toDateString() method returns the date (not the time) of a date object as a string.

Syntax
Date.toDateString()
Parameters
No parameter changes
Technical Details
Return Value:	A String, representing the date as a string


// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Get the date portion as a string
let dateString = d.toDateString();

// Output the date string
console.log(dateString);




// toGMTString()	Deprecated. Use the toUTCString() method instead


// toISOString()	Returns the date as a string, using the ISO standard

Example
Get a date as a string, using the ISO standard:

const d = new Date();
let text = d.toISOString();


Description
The toISOString() method returns a date object as a string, using the ISO standard.

The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ

Syntax
Date.toISOString()
Parameters
No parameter changes
Technical Details
Return Value:	A String, representing the date and time using the ISO standard format
JavaScript Version:	ECMAScript 5

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Get the ISO 8601 string representation
let isoString = d.toISOString();

// Output the ISO string
console.log(isoString);



// toJSON()	Returns the date as a string, formatted as a JSON date
Example
Get a date as a string, formatted as a JSON date:

const d = new Date();
let text = d.toJSON();


Description
The toJSON() method returns a date object as a string, formatted as a JSON date.

JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ

Syntax
Date.toJSON()
Parameters
No parameter changes
Technical Details
Return Value:	A String, representing the date and time formated as a JSON date
JavaScript Version:	ECMAScript 5

// Create a new Date object
let d = new Date("June 15, 2023 12:00:00");

// Convert Date object to JSON string
let jsonString = d.toJSON();

// Output the JSON string
console.log(jsonString);



// toLocaleDateString()	Returns the date portion of a Date object as a string, using locale conventions

Example
Get a date as a string, using locale conventions:

const d = new Date();
let text = d.toLocaleDateString();

Description
The toLocaleDateString() method returns the date (not the time) of a date object as a string, using locale conventions.


Syntax
Date.toLocaleDateString()
Technical Details
Return Value:	A String, representing the date as a string
JavaScript Version:	ECMAScript 1

// Create a new Date object
let d = new Date("June 15, 2023");

// Get the localized date string
let dateString = d.toLocaleDateString();

// Output the localized date string
console.log(dateString);


// toLocaleTimeString()	Returns the time portion of a Date object as a string, using locale conventions
Example
Get the time portion of a date as a string, using locale conventions:

const d = new Date();
let text = d.toLocaleTimeString();

Description
The toLocaleTimeString() method returns the time portion of a date object as a string, using locale conventions.

Syntax
Date.toLocaleTimeString()
Technical Details
Return Value:	A String, representing the time as a string
JavaScript Version:	ECMAScript 1


// toLocaleString()	Converts a Date object to a string, using locale conventions
Example
Get a date as string, using locale conventions:

const d = new Date();
let text = d.toLocaleString();

Description
The toLocaleString() method returns a Date object as a string, using locale settings.

The default language depends on the locale setup on your computer.

Syntax
Date.toLocaleString(locales, options)
Parameter Values
Parameter	Description
locales

Optional. Which language specific format to use.
Click on the "Try it" button to see all values in action.
Legal Values:

ar-SA Arabic (Saudi Arabia)
bn-BD Bangla (Bangladesh)
bn-IN Bangla (India)
cs-CZ Czech (Czech Republic)
da-DK Danish (Denmark)
de-AT Austrian German
de-CH "Swiss" German
de-DE Standard German (as spoken in Germany)
el-GR Modern Greek
en-AU Australian English
en-CA Canadian English
en-GB British English
en-IE Irish English
en-IN Indian English
en-NZ New Zealand English
en-US US English
en-ZA English (South Africa)
es-AR Argentine Spanish
es-CL Chilean Spanish
es-CO Colombian Spanish
es-ES Castilian Spanish (as spoken in Central-Northern Spain)
es-MX Mexican Spanish
es-US American Spanish
fa-IR Iranian (Iran)
fi-FI Finnish (Finland)
fr-BE Belgian French
fr-CA Canadian French
fr-CH "Swiss" French
fr-FR Standard French (especially in France)
he-IL Hebrew (Israel)
hi-IN Hindi (India)
hu-HU Hungarian (Hungary)
id-ID Indonesian (Indonesia)
it-CH "Swiss" Italian
it-IT Standard Italian (as spoken in Italy)
ja-JP Japanese (Japan)
ko-KR Korean (Republic of Korea)
nl-BE Belgian Dutch
nl-NL Standard Dutch (as spoken in The Netherlands)
no-NO Norwegian (Norway)
pl-PL Polish (Poland)
pt-BR Brazilian Portuguese
pt-PT European Portuguese (as written and spoken in Portugal)
ro-RO Romanian (Romania)
ru-RU Russian (Russian Federation)
sk-SK Slovak (Slovakia)
sv-SE Swedish (Sweden)
ta-IN Indian Tamil
ta-LK Sri Lankan Tamil
th-TH Thai (Thailand)
tr-TR Turkish (Turkey)
zh-CN Mainland China, simplified characters
zh-HK Hong Kong, traditional characters
zh-TW Taiwan, traditional characters
options	Optional. An object where you can set some properties.
Legal properties:

dateStyle	Legal values:
"full"
"long"
"medium"
"short"
timeStyle	"full"
"long"
"medium"
"short"
localeMatcher
"best-fit" (default)
"lookup"
timeZone	 
hour12	false
true
hourCycle	"h11"
"h12"
"h23"
"h24"
formatMatcher
"basic"
"best-fit" (default)
weekday	"long"
"short"
"narrow"
year	"2-digit"
"numeric"
month	"2-digit"
"long"
"narrow"
"numeric"
"short"
day	"2-digit"
"numeric"
hour	"2-digit"
"numeric"
minute	"2-digit"
"numeric"
second	"2-digit"
"numeric"
timeZoneName	"long"
"short"


// toString()	Converts a Date object to a string
Example
Convert a date object to a string:

const d = new Date();
let text = d.toString();


Description
The toString() method returns a date object as a string.
Syntax
Date.toString()
Parameters
No parameter changes
Return Value
Date and time represented as a string



// toTimeString()	Converts the time portion of a Date object to a string
Example
Get the time portion of a date object as a string:

const d = new Date();
let text = d.toTimeString();

Description
The toTimeString() method returns the time portion of a date object as a string.


Syntax
Date.toTimeString()
Parameters
No parameter changes
Technical Details
Return Value:	A String, representing the time as a string

// toUTCString()	Converts a Date object to a string, according to universal time
Example
Get a date object as a string, according to UTC:

const d = new Date();
let text = d.toUTCString();

Description
The toUTCString() method returns a date object as a string, according to UTC.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.

Syntax
Date.toUTCString()
Parameters
No parameter changes
Technical Details
Return Value:	A String, representing the UTC date and time as a string
JavaScript Version:	ECMAScript 1


// UTC()	Returns the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time

Example
Get the number of milliseconds between a date and January 1, 1970:

let ms = Date.UTC(2020, 02, 30);

Description
The Date.UTC() method returns the number of milliseconds between a specified date and midnight of January 1, 1970, according to UTC.

Notes
UTC (Universal Time Coordinated) is the time set by the World Time Standard.

UTC time is the same as GMT time (Greenwich Mean Time).

Syntax
Date.UTC(year, month, day, hours, minutes, seconds, millisec)
Date.UTC() is a static method of the Date object.

You cannot use it on a date like d.UTC()

The syntax is always Date.UTC().

Parameter Values
Parameter	Description
year	Required. A four-digit value representing the year, negative values are allowed
month	Required. An integer representing the month
Expected values are 0-11, but other values are allowed:

-1 will result in the last month of the previous year
12 will result in the first month of the next year
13 will result in the second month of the next year
day	Optional. An integer representing the day of month
Expected values are 1-31, but other values are allowed:

0 will result in the last hour of the previous month
-1 will result in the hour before the last hour of the previous month
If the month has 31 days:

32 will result in the first day of the next month
If the month has 30 days:

32 will result in the second day of the next month
hour	Optional. Default 0. An integer representing the hour.
Expected values are 0-23, but other values are allowed:

-1 will result in the last hour of the previous day
24 will result in the first hour of the next day
min	Optional. Default 0. An integer representing the minutes.
Expected values are 0-59, but other values are allowed:

-1 will result in the last minute of the previous hour
60 will result in the first minute of the next hour
sec	Optional. Default 0. An integer representing the seconds
Expected values are 0-59, but other values are allowed:

-1 will result in the last second of the previous minute
60 will result in the first second of the next minute
millisec	Optional. Default 0. An integer representing the milliseconds
Expected values are 0-999, but other values are allowed:

-1 will result in the last millisecond of the previous second
1000 will result in the first millisecond of the next second
Technical Details
Return Value:	A Number, representing the number of milliseconds between the specified date-time and midnight January 1 1970
JavaScript Version:	ECMAScript 1
More Examples
Example
Create a date object using UTC time instead of local time:

let d = new Date(Date.UTC(2020, 02, 30));



// valueOf()	Returns the primitive value of a Date object

Example
Get the primitive value of a date object:

const d = new Date();
let ms = d.valueOf();

Description
The valueOf() method returns the primitive value of a date object.

Note: The primitive value is returned as the number of millisecond since midnight January 1, 1970 UTC.

Syntax
Date.valueOf()
Parameters
No parameter changes
Technical Details
Return Value:	A Number, representing the number of milliseconds between the date object and midnight January 1, 1970 UTC
JavaScript Version:	ECMAScript 1