const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_category");
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/add",ctrl.addData);

//READ --> GET
routing.get("/all",ctrl.getAll);

//UPDATE --> PUT
routing.put("/update",ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del/:id_category", ctrl.removeData)

module.exports = routing;