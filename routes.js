const express = require("express");
const userController = require("./src/controller/UseControllers");

const routes = express.Router();

routes.get("/", userController.index);
routes.post("/", userController.store);

module.exports = routes;