const PartnerController = require("../../controller/partnerController/PartnerController");

const routerPartners= require("express").Router();

routerPartners.post("/",PartnerController.addPartner);
routerPartners.get("/",PartnerController.getPartners);

module.exports = routerPartners