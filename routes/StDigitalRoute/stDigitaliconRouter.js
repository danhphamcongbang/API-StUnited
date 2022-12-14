const stDigitaliconController = require("../../controller/StDigitalController/stDigitaliconController");
const stDigitalIconRoute= require("express").Router();

stDigitalIconRoute.post("/",stDigitaliconController.addStDigitalIcon);
stDigitalIconRoute.get("/",stDigitaliconController.getStDigitalIcon);

module.exports = stDigitalIconRoute