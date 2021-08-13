const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_auth");

//READ --> GET
routing.post("/",ctrl.login);

module.exports = routing;