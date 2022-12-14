const WeDevelopController = require("../../controller/WeDevelop/WeDevelopController");
const WeDevelopRoute= require("express").Router();

WeDevelopRoute.post("/",WeDevelopController.addWedevelop);
WeDevelopRoute.get("/",WeDevelopController.getWedevelop);

module.exports = WeDevelopRoute