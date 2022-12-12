const Fe07Div02Controller = require('../../controller/FE07STSOFTWARE/FE07Div2Controller');
const routerFE07Div2= require("express").Router();

routerFE07Div2.post("/",Fe07Div02Controller.addFe07div2);
routerFE07Div2.get("/",Fe07Div02Controller.getFe07div2);

module.exports = routerFE07Div2