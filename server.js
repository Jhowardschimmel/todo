const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const routes = require('./routes/todo');

const app = express();
const PORT = process.env.PORT;
console.log(`Your port is ${process.env.PORT}`);

app.use(express.json());
// http://localhost:3000/
app.use('/', routes);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
  });

  console.log('process.env', process.env.DB_PASSWORD)
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'todo'
});
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});
// close the MySQL connection
connection.end();