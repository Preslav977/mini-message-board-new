const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/message/:id", (req, res) => {
  const { messageId } = req.params;

  res.send(messageId);
});

module.exports = messageRouter;
