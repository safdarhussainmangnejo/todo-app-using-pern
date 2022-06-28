const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "023-18-0059",
  host: "localhost",
  port: 5432,
  database: "testdb"
});

module.exports = pool;