const WhoWeAreD2Controller = require("../../controller/WhoWeAreD1Controller/WhoWeAreD2Controller");
const WhoWeAreD2= require("express").Router();

WhoWeAreD2.post("/",WhoWeAreD2Controller.addWhoWeAreD2);
WhoWeAreD2.get("/",WhoWeAreD2Controller.getWhoWeAreD2);

module.exports = WhoWeAreD2