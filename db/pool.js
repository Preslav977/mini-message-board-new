const { Pool } = require("pg");

module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:${process.env.PORT}/${process.env.DB_NAME}`,
});
