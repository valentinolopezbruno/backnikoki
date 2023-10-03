const express = require("express");
const marcaController = require("../controllers/marca.controller.js");

const router = express.Router();

router.get("/api/marca", marcaController.getMarcas);
router.post("/api/marca", marcaController.crearMarca);

module.exports = router;