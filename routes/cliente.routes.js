const express = require("express");
const clienteController = require("../controllers/cliente.controller.js");

const router = express.Router();

router.get("/api/cliente", clienteController.getClientes);
router.post("/api/cliente", clienteController.crearCliente);
router.post("/api/cliente/borrar", clienteController.eliminarCliente);
/* router.post("/api/cliente/editar", clienteController.actualizarProducto);
router.patch("/api/cliente/disponibilidad", clienteController.actualizarDisponibilidad); */



module.exports = router;