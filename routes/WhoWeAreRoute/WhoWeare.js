const WhoWeAreD1Controller = require("../../controller/WhoWeAreD1Controller/WhoWeAreD1Controller");
const WhoWeAreD1= require("express").Router();

WhoWeAreD1.post("/",WhoWeAreD1Controller.addWhoWeAreD1);
WhoWeAreD1.get("/",WhoWeAreD1Controller.getWhoWeAreD1);

module.exports = WhoWeAreD1