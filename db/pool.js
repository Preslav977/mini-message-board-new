const { Pool } = require("pg");

const { argv } = require("node:process");

require("dotenv").config();

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/${process.env.DB_NAME}`,
});
