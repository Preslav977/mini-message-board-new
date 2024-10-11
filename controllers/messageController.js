const db = require("../db/queries");

async function getUsernameAndMessage(req, res) {
  const messages = await db.getAllUsernamesAndMessages();

  res.render("index", {
    title: "Mini Messaging Board",
    messages: messages,
  });
}

async function createUsernameAndMessageGet(req, res) {
  res.render("form");
}

async function createUsernameAndMessagePost(req, res) {
  const { username, message } = req.body;
  await db.createUsernameAndMessages(username, message);
  res.redirect("/");
}

async function getMessageDetail(req, res) {
  const { id } = req.params;

  const messageDetail = await db.getUserMessageDetails(id);

  res.render("message", {
    message: messageDetail,
  });
}

module.exports = {
  getUsernameAndMessage,
  createUsernameAndMessageGet,
  createUsernameAndMessagePost,
  getMessageDetail,
};
