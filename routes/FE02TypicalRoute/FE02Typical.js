const FE02TypicalController =  require('../../controller/FE02Typical/FE02TypicalController')
const routerFe02= require("express").Router();

routerFe02.post("/",FE02TypicalController.addFe02Typical);
routerFe02.get("/",FE02TypicalController.getFe02Typical)

module.exports = routerFe02;