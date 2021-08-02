const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_product");
const upload = require("../middleware/upload")
const validate = require("../middleware/validate")

if (process.env.NODE_ENV == "test") {
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
} else {
    
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
    
    // //CREATE --> POST
    // routing.post("/add",validate(['admin']), upload.single("image"), ctrl.addData);

    // //READ --> GET
    // routing.get("/all",validate(['admin','user','member']), ctrl.getAll);
    // routing.get("/sort/name",validate(['admin','user','member']),ctrl.sortbyName);
    // routing.get("/sort/date",validate(['admin','user','member']),ctrl.sortbyDate);
    // routing.get("/sort/price/asc",validate(['admin','user','member']),ctrl.sortbyPriceASC);
    // routing.get("/sort/price/desc",validate(['admin','user','member']),ctrl.sortbyPriceDESC);
    // routing.get("/sort/category/:name_category",validate(['admin','user','member']),ctrl.sortbyCategory)
    // routing.get("/search",validate(['admin','user','member']),ctrl.searchbyName)

    // //UPDATE --> PUT
    // routing.put("/update",validate(['admin']),ctrl.updateData)

    // //DELETE --> DELETE
    // routing.delete("/del/:id_product",validate(['admin']), ctrl.removeData)
}



module.exports = routing;
