const { Pool } = require("pg");

module.exports = new Pool({
  connectionString:
    "postgresql://preslaw:22121955Bg971KEKW@localhost:5432/mini_message_board",
});
