const { DateTime } = require('luxon');

// Current date and time in local time zone
const localDateTime = DateTime.now();
console.log('Local Time:', localDateTime.toString());

// Convert local time to a specific time zone (e.g., "America/New_York")
const timeZoneDateTime = localDateTime.setZone('America/New_York');
console.log('New York Time:', timeZoneDateTime.toString());

// Convert a specific date-time to UTC
const utcDateTime = timeZoneDateTime.toUTC();
console.log('UTC Time:', utcDateTime.toString());
