const winston = require('winston');

const logger = winston.createLogger({
  level: 'error', // Log only errors and above
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // Log errors to file
    new winston.transports.Console() // Optionally log to console
  ]
});

module.exports = logger;
