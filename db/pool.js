const { Pool } = require("pg");

module.exports = new Pool({
  connectionString:
    "postgresql://process.env.role_name:process.env.role_password@localhost:5432/process.env.database",
});
