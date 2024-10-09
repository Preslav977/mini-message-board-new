const express = require("express");

const messageRouter = require("../controllers/messageController");

const router = express.Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.get("/message/:id", (req, res, next) => {
  res.render("message", { message: req.params });
  console.log(req.params);
});

let id = 3;

router.post("/new", (req, res, next) => {
  messages.push({
    id: id++,
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  console.log(messages);
  res.redirect("/");
});

module.exports = router;
