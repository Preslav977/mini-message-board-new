const { Pool } = require("pg");

const { argv } = require("node:process");

let sequelize;

if (process.env.DB_URL) {
  sequelize = new sequelize(process.env.DB_URL);
} else {
  sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "postgresql",
    }
  );
}

module.exports = new Pool({
  connectionString: `${argv[2]}`,
});
