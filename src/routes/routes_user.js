const express = require("express");
const routing = express.Router();
const ctrl = require("../controllers/controllers_user");
const validate = require("../middleware/validate")

if (process.env.NODE_ENV == "test") {
    //CREATE --> POST
    routing.post("/add",ctrl.addData);
    
    //READ --> GET
    routing.get("/all",ctrl.getAll);
    
    //UPDATE --> PUT
    routing.put("/update",ctrl.updateData)
    
    //DELETE --> DELETE
    routing.delete("/del", ctrl.removeData)
} else {
    
    //CREATE --> POST
    routing.post("/add",ctrl.addData);
    
    //READ --> GET
    routing.get("/all",ctrl.getAll);
    routing.get("/user/:username",ctrl.getUsername);
    
    //UPDATE --> PUT
    routing.put("/update",ctrl.updateData)
    
    //DELETE --> DELETE
    routing.delete("/del", ctrl.removeData)
    
    // //CREATE --> POST
    // routing.post("/add",ctrl.addData);

    // //READ --> GET
    // routing.get("/all",validate(['admin']),ctrl.getAll);

    // //UPDATE --> PUT
    // routing.put("/update",validate(['admin','member','user']),ctrl.updateData)

    // //DELETE --> DELETE
    // routing.delete("/del",validate(['admin']), ctrl.removeData)

}

module.exports = routing;