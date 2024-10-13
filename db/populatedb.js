const { Client } = require("pg");

const { argv } = require("node:process");

const SQL = `CREATE TABLE IF NOT EXISTS mini_msg_board (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255), message VARCHAR(255), date_added DATE);


INSERT INTO mini_msg_board (username, message, date_added)
VALUES ('Preslaw', 'Hello', '11/10/2024')
`;

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

async function main() {
  console.log("seeding...");

  const client = new Client({
    connectionString: `${argv[2]}`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
