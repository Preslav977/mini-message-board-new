const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("");
});

module.exports = router;
