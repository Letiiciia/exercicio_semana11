const express = require('express');
const router = express.Router();
const controller = require("../controllers/maravilhosas-controller");
const cors = require("cors");

//get /maravilhosas
router.get("/maravilhosas",cors(), controller.getMaravilhosas);

//post /maravilhosas
router.get("/maravilhosas/:id", cors(), controller.getMaravilhosaById);

//get /maravilhosas/id
router.post("/maravilhosas", cors(), controller.addMaravailhosa);

//put /maravilhosas/id
router.put("/maravilhosas/:id", cors(), controller.updateMaravilhosa);

//delete /maravilhosas/id
router.delete("/maravilhosas/:id", cors(), controller.deleteMaravilhosa);

module.exports = router;