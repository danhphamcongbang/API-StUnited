const JoinUsController = require('../../controller/joinus/JoinUsController');
const routerJoinUs= require("express").Router();

routerJoinUs.post("/",JoinUsController.addJoinUs);
routerJoinUs.get("/",JoinUsController.getJoinUs);

module.exports = routerJoinUs