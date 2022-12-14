const stDigitalImageController = require("../../controller/StDigitalController/stDigitalImageController");
const stDigitalImageRoute= require("express").Router();

stDigitalImageRoute.post("/",stDigitalImageController.addStDigitalImage);
stDigitalImageRoute.get("/",stDigitalImageController.getStDigitalImage);

module.exports = stDigitalImageRoute