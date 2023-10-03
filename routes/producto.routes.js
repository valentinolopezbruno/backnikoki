const express = require("express");
const productoController = require("../controllers/producto.controller.js");

const router = express.Router();

router.get("/api/producto", productoController.getProductos);
router.post("/api/producto", productoController.crearProducto);
router.delete("/api/producto", productoController.eliminarProducto);
router.patch("/api/producto", productoController.actualizarProducto);


module.exports = router;