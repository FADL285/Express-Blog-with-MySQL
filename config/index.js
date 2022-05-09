const dotenv = require("dotenv");

dotenv.config();

const { DB_HOST, DB_USER, DB_NAME, DB_PASS } = process.env;

module.exports = {
  DB_HOST,
  DB_USER,
  DB_NAME,
  DB_PASS
};
