//https://github.com/bezkoder/nodejs-express-mysql/blob/master/app/models/db.js
// const mysql = require("mysql");
const mysql = require("mysql2");
// const dotenv = require('dotenv');
// dotenv.config();
const dbConfig = require("../config/db.config");

var pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
  // Release the connection back to the pool
  connection.release();
});


module.exports = pool.promise();
