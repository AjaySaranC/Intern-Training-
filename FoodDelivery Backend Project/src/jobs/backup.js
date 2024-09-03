const { exec } = require('child_process');
const moment = require('moment-timezone');
const dotenv = require('dotenv');

dotenv.config();

function backupDatabase() {
//   const timestamp = moment().tz('Asia/Kolkata').format('YYYYMMDD_HHmmss');
//   const backupFileName = `backup_${timestamp}.sql`;
  const backupPath = `C:\\Users\\Ajay Saran\\Documents\\FoodDelivery_2\\backup\\backupdata.sql`; 
  
  // Replace the path with your actual MySQL version
  const mysqldumpPath = `"C:\\Program Files\\MySQL\\MySQL Server 8.0\\bin\\mysqldump.exe"`;
  
//   const command = `${mysqldumpPath} -u ${root} -p${process.env.DB_PASSWORD} ${process.env.DB_NAME} > "${backupPath}"`;
    const command = `${mysqldumpPath} -u "root" -p"saranajay" "food_delivery_db" > "${backupPath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error backing up database: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Backup stderr: ${stderr}`);
      return;
    }
    console.log(`Database backup successful: ${backupFileName}`);
  });
}

module.exports = backupDatabase;
