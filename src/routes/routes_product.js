const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_product");
const upload = require("../middleware/upload")
const validate = require("../middleware/validate")

//CREATE --> POST
routing.post("/add", upload.single("image"), ctrl.addData);

//READ --> GET
routing.get("/all", ctrl.getAll);
routing.get("/sort/name",ctrl.sortbyName);
routing.get("/sort/date",ctrl.sortbyDate);
routing.get("/sort/price/asc",ctrl.sortbyPriceASC);
routing.get("/sort/price/desc",ctrl.sortbyPriceDESC);
routing.get("/sort/category/:name_category",ctrl.sortbyCategory)
routing.get("/search",ctrl.searchbyName)

//UPDATE --> PUT
routing.put("/update", upload.single("image"), ctrl.updateData)

//DELETE --> DELETE
routing.delete("/del/:id_product", ctrl.removeData);
module.exports = routing;
