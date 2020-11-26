const express = require("express");
const { celebrate } = require("celebrate");
const routes = express.Router();

const userController = require("./controllers/userController");
const userValidator = require("./validators/userValidator");

//User
routes.get("/user", celebrate(userValidator.index), userController.index);
routes.post("/user", celebrate(userValidator.create), userController.create);
routes.delete("/user/:id", celebrate(userValidator.delete), userController.delete);
routes.put("/user", celebrate(userValidator.update), userController.update);

module.exports = routes;