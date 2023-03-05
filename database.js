const mysql = require('mysql');
const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'testuser',
  password: 'testpass',
  database: 'uusidb'
});
module.exports = connection;