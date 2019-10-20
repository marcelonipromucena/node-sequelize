const express = require("express");
const UserController = require("./controller/UserController");
const AddressController = require("./controller/AddressController");
const TechController = require("./controller/TechController");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);

module.exports = routes;
