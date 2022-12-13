const PortfolioComponent = require("../../controller/Portfolio/PortfolioController");
const routerFE07Div2= require("express").Router();

routerFE07Div2.post("/",PortfolioComponent.addPortfolio);
routerFE07Div2.get("/",PortfolioComponent.getPortfolio);

module.exports = routerFE07Div2