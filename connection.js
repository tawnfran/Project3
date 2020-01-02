var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'process.env.MYSQLPASS',
    database: 'guestlistdb'
  });
}

connection.connect();
module.exports = connection;