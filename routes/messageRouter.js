const { Router } = require("express");

const messageController = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", messageController.getUsernameAndMessage);

messageRouter.get("/new", messageController.createUsernameAndMessageGet);

messageRouter.post("/new", messageController.createUsernameAndMessagePost);

messageRouter.get("/message/:id", messageController.getMessageDetail);

module.exports = messageRouter;
