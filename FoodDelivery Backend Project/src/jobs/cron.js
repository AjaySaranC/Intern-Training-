const cron = require('node-cron');
const backupDatabase = require('./backup');

// Schedule the backup to run every hour
cron.schedule('0 * * * *', () => {
  console.log('Running database backup...');
  backupDatabase();
});

console.log('Cron job scheduled: Database backup every hour.');
