const { Pool } = require("pg");

const { argv } = require("node:process");

module.exports = new Pool({
  connectionString: `${argv[2]}`,
});
