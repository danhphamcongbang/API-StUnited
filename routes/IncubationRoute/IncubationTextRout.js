const IncubationTextController = require("../../controller/IncubationController/IncubationTextController");


const routerIncubationText= require("express").Router();
routerIncubationText.post("/",IncubationTextController.addIncubationText)
routerIncubationText.get("/",IncubationTextController.getIncubationText)

module.exports = routerIncubationText