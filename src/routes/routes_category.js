const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_category");
const validate = require("../middleware/validate")

if (process.env.NODE_ENV == "test") {
    //CREATE --> POST
    routing.post("/add",ctrl.addData);

    //READ --> GET
    routing.get("/all",ctrl.getAll);

    //UPDATE --> PUT
    routing.put("/update",ctrl.updateData)

    //DELETE --> DELETE
    routing.delete("/del/:id_category", ctrl.removeData)
} else {
    
    //CREATE --> POST
    routing.post("/add",ctrl.addData);

    //READ --> GET
    routing.get("/all",ctrl.getAll);

    //UPDATE --> PUT
    routing.put("/update",ctrl.updateData)

    //DELETE --> DELETE
    routing.delete("/del/:id_category", ctrl.removeData)
    
    // //CREATE --> POST
    // routing.post("/add",validate(['admin']),ctrl.addData);

    // //READ --> GET
    // routing.get("/all",validate(['admin','user','member']),ctrl.getAll);

    // //UPDATE --> PUT
    // routing.put("/update",validate(['admin']),ctrl.updateData)

    // //DELETE --> DELETE
    // routing.delete("/del/:id_category",validate(['admin']), ctrl.removeData)
}



module.exports = routing;