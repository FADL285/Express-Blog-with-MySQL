const mysql = require("mysql2/promise");
const config = require("../config");

const pool = mysql.createPool({
  host: config.DB_HOST,
  database: config.DB_NAME,
  user: config.DB_USER,
  password: config.DB_PASS
});
module.exports = pool;
