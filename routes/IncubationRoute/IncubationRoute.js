const IncubationController = require("../../controller/IncubationController/IncubationController");

const routerIncubation= require("express").Router();
routerIncubation.post("/",IncubationController.addIncubation)
routerIncubation.get("/",IncubationController.getIncubation)

module.exports = routerIncubation