const pool = require("./pool");

async function getAllUsernamesAndMessages() {
  const { rows } = await pool.query("SELECT * FROM mini_msg_board");
  return rows;
}

async function createUsernameAndMessages(username, message) {
  await pool.query(
    "INSERT INTO mini_msg_board (username, message, date_added) VALUES ($1, $2, $3)",
    [username, message, new Date()]
  );
}

async function getUserMessageDetails(id) {
  const { rows } = await pool.query(
    `SELECT * FROM mini_msg_board WHERE id = ${id}`
  );

  return rows;
}

module.exports = {
  getAllUsernamesAndMessages,
  createUsernameAndMessages,
  getUserMessageDetails,
};
