const Fe07Div01Controller = require('../../controller/FE07STSOFTWARE/FE07Div1Controller');
const routerFE07Div1= require("express").Router();

routerFE07Div1.post("/",Fe07Div01Controller.addFe07div1);
routerFE07Div1.get("/",Fe07Div01Controller.getFe07div1);

module.exports = routerFE07Div1