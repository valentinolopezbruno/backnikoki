const express = require("express");
const usuarioController = require("../controllers/usuario.controller.js");

const router = express.Router();

router.get("/api/usuario", usuarioController.getUsuarios);
router.post("/api/usuario", usuarioController.crearUsuario);
router.post("/api/usuarioValidar", usuarioController.validarUsuario);


module.exports = router;