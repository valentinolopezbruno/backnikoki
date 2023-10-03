const express = require("express");
const productoController = require("../controllers/producto.controller.js");

const router = express.Router();

router.get("/api/producto", productoController.getProductos);
router.post("/api/producto", productoController.crearProducto);
router.post("/api/producto/borrar", productoController.eliminarProducto);
router.post("/api/producto/editar", productoController.actualizarProducto);
router.patch("/api/producto/disponibilidad", productoController.actualizarDisponibilidad);



module.exports = router;