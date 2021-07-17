const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.info('Error at connecting to the database: ' + err);
    return;
  }
  console.error('Succesfully connected at database');
});

module.exports = connection;
