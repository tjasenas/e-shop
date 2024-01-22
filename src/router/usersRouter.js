const express = require("express");
const { login, register } = require("../controllers/usersController");

const usersRouter = express.Router();

usersRouter.post("/api/login", login);
usersRouter.post("/api/register", register);

module.exports = {
  usersRouter,
};
