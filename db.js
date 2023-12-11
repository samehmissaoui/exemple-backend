// db.js

const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'formation',
  port:'3306'
});

// Connect
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
