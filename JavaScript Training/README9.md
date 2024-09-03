# Milestone 9:
## JavaScript Date Object:
- Date objects are static.
- Date objects are created with the new Date() constructor.
- new Date() creates a date object with the current date and time.
- There are 9 ways to create a new date object:
    ```js
        new Date()
        new Date(date string)

        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,month,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)

        new Date(milliseconds)
    ```
- Example snippet:
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
const d = new Date();
document.getElementById("demo").innerHTML = d;
// Fri Aug 02 2024 14:31:04 GMT+0530 (India Standard Time)
</script>

</body>
</html>

```
- new Date(year, month, ...) creates a date object with a specified date and time.
- 7 numbers specify year, month, day, hour, minute, second, and millisecond 
```js
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d)
```
- JavaScript counts months from 0 to 11.

## Formating date object:
###  toDateString() method
```js
const currentDate = new Date();
const formattedDate = currentDate.toDateString();
console.log(formattedDate); // Fri Aug 02 2024
```

### toLocaleDateString() method
- format the date part of the date object into the same format as acquired by your system or in the specified format.
```js
const currentDate = new Date();
const formattedLocalDate = currentDate.toLocaleDateString();
const formattedInSpecifiedFormat = currentDate.toLocaleDateString("hi-IN");
console.log(formattedLocalDate);  //  8/2/2024
console.log(formattedInSpecifiedFormat); //  2/8/2024
```

### toLocaleString()
- It also returns time with date.
```js
const currentDate = new Date();
const formattedLocalDate = currentDate.toLocaleString();
const formattedInSpecifiedFormat = currentDate.toLocaleString("hi-IN");
console.log(formattedLocalDate);
console.log(formattedInSpecifiedFormat);
```

### Intl.DateTimeFormat()
- It formats the date into specified format and with the specified options for formatting the date and time.
```js
const currentDate = new Date();
const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {dateStyle: 'long'});
const formattedDate = dateTimeFormatter.format(currentDate);
console.log(formattedDate);
```
## Dates Comparison
```js
let date1 = new Date();
let date2 = new Date("6/01/2022");

if (date1 > date2) {
  console.log("Date 1 is greater than Date 2");  // Date 1 is greater than Date 2
} else if (date1 < date2) {
  console.log("Date 1 is less than Date 2");
} else {
  console.log("Both Dates are same");
}
```
- getTime() date method returns the number of milliseconds.
- But if we want to compare specific information like day, month, and so on, we can use other date methods like the getDate(), getHours(), getDay(), getMonth() and getYear().
```js
let date1 = new Date();
let date2 = new Date();

if (date1.getTime() === date2.getTime()) {
  console.log("Both  are equal");
} else {
  console.log("Not equal");
}
```

- using `.getYear()`
```js
let date1 = new Date("06/21/2022").getYear();
let date2 = new Date("07/28/2021").getYear();

if (date1 < date2) {
  console.log("Date1 is less than Date2 in terms of year");
} else if (date1 > date2) {
  console.log("Date1 is greater than Date2 in terms of year");
} else {
  console.log(`Both years are equal`);
}
```

## Converting UTC to Local Time:
- The `.toLocaleString()` method allows to specify locales and options for formatting if needed.

```js
const utc = new Date()
const local = new Date(utc);
console.log(local.toLocaleTimeString())
```

## Coverting Local time to UTC time:
- The `.toUTCString()` method allows to specify locales and options for formatting if needed.

```js
const localDate = new Date();
console.log('Local Time:', localDate.toString());
console.log('UTC Time:', localDate.toUTCString());
```

## Displaying date and time
```js
const d = new Date();
console.log('Current Date and Time:',d.toLocaleString());
//  Current Date and Time: 6/8/2024, 11:08:38 am
```
### Displaying Separately:
```js
const now = new Date();
console.log('Current Date:', now.toLocaleDateString());
console.log('Current Time:', now.toLocaleTimeString());

//Current Date: 6/8/2024
//Current Time: 11:10:17 am
```
## TimeZone Offset
- The time zone offset in JavaScript refers to the difference, in minutes, between the local time zone and UTC (Coordinated Universal Time).
- getTimezoneOffset() returns the difference between UTC time and local time.

- getTimezoneOffset() returns the difference in minutes.

```js
// difference in minutes

const now = new Date();
const offsetInMinutes = now.getTimezoneOffset();
console.log('Time Zone Offset (in minutes):', offsetInMinutes);

```

```js
// difference in hours and minutes

let timezoneOffset = new Date().getTimezoneOffset();

let offsetHours = Math.floor(timezoneOffset / 60);
let offsetMinutes = timezoneOffset % 60;
 
console.log(`The timezone offset is ${offsetHours} hours and ${offsetMinutes} minutes.`);

```
## Epoch Time:
- Epoch time is a numerical way to store and calculate time that is independent of any time zone or location.
- It eliminates the problems created by different time zones being used in different places around the world.
- It is also useful for working with longer periods of time, since it counts in seconds and milliseconds instead of days, weeks, years, or months.
-  Date object includes a `now()` method that returns the current Epoch time in milliseconds.
```js
const currentEpochMilliseconds = Date.now();
console.log('Current Epoch Time (milliseconds):', currentEpochMilliseconds);

//Current Epoch Time (milliseconds): 1722926382924
```

### Convertion of Epoch Time to Date:
```js
const currentEpoch = Date.now();
const date = new Date();
console.log('Date: ', date.toUTCString());
// Date:  Tue, 06 Aug 2024 06:45:19 GMT
```
## Date conversion with various time zones including day light time savings

### Convert Local Time to a Specific Time Zone
```js

const localDate = new Date();

const utcDate = new Date(localDate.toUTCString());

console.log('Local Time:', localDate.toString());
console.log('UTC Time:', utcDate.toUTCString());

```
### Adjust for Time Zone Offsets:
```js
function convertToTimeZone(date, offset) {
    
    const localDate = new Date(date.getTime() + (offset * 60 * 60 * 1000));
    return localDate;
}

const now = new Date();
const offsetHours = -5; 

const timeZoneDate = convertToTimeZone(now, offsetHours);
console.log('Time in Time Zone:', timeZoneDate.toString());

```
### Using External Libraries:
#### Using `luxon`
- `luxon` library  used for handling dates and times with time zones and DST support.
```js
const { DateTime } = require('luxon');

const localDateTime = DateTime.now();
console.log('Local Time:', localDateTime.toString());

const timeZoneDateTime = localDateTime.setZone('America/New_York');
console.log('New York Time:', timeZoneDateTime.toString());
const utcDateTime = timeZoneDateTime.toUTC();
console.log('UTC Time:', utcDateTime.toString());

```
#### Using `moment-timezone`:
```js
const moment = require('moment-timezone');
const now = moment();
console.log('Local Time:', now.format());

const timeZoneTime = now.tz('Europe/Berlin');
console.log('Germany Time:', timeZoneTime.format());

const utcTime = timeZoneTime.utc();
console.log('UTC Time:', utcTime.format());

```
## Date conversion without using any third party libraries
- Without using external libraries we can do,
- Convertion of local to utc time and vice-versa, as done above.

### Handling Offset:
```js
function convertToTimeZone(date, offset) {
    
    const localDate = new Date(date.getTime() + (offset * 60 * 60 * 1000));
    return localDate;
}

const now = new Date();
const offsetHours = -5; 

const timeZoneDate = convertToTimeZone(now, offsetHours);
console.log('Time in Time Zone:', timeZoneDate.toString());
```