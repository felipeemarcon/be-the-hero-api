const express = require("express");
const routes = express.Router();

// Controllers
const OngController = require("./controllers/OngController");

// Ongs endpoints
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

module.exports = routes;
