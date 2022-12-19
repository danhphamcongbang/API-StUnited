const WhoWeAreUserController = require("../../controller/WhoWeAreD1Controller/WhoWeAreUsersController");

const WhoWeAreUserRouter= require("express").Router();

WhoWeAreUserRouter.post("/",WhoWeAreUserController.addWhoWeAreUser);
WhoWeAreUserRouter.get("/",WhoWeAreUserController.getWhoWeAreUser);

module.exports = WhoWeAreUserRouter