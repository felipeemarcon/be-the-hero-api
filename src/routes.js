const express = require("express");
const routes = express.Router();

// Controllers
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");

// Ongs endpoints
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

// Ongs Incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);

module.exports = routes;
