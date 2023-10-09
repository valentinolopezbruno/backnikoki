const express = require("express");
const ventaController = require("../controllers/venta.controller.js");

const router = express.Router();

router.get("/api/venta", ventaController.getVentas);
router.post("/api/venta", ventaController.crearVenta);
/* router.post("/api/usuarioValidar", usuarioController.validarUsuario);
 */

module.exports = router;