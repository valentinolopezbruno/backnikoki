const express = require("express");
const categoriaController = require("../controllers/categoria.controller.js");

const router = express.Router();

router.get("/api/categoria", categoriaController.getCategorias);
router.post("/api/categoria", categoriaController.crearCategoria);

module.exports = router;