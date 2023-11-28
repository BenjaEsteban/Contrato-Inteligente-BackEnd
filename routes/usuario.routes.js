const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller.js')

// api/usuario
router.post('/', usuarioController.crearUsuario)
router.get('/', usuarioController.obtenerUsuario)
router.get('/:id', usuarioController.obtenerUnUsuario)
//router.delete('/:id', usuarioController.eliminarUsuario)
//router.put('/:id', usuarioController.actualizarUsuario)

module.exports = router