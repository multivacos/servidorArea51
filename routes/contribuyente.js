// Rutas para contribuyente
const express = require('express');
const router = express.Router();
const contributenteController = require('../controllers/contribuyenteController');

// api/contribuyentes
router.post('/', contributenteController.crearContribuyente);
router.get('/', contributenteController.obtenerContrib);
router.put('/:id', contributenteController.actualizarContrib);
router.get('/:id', contributenteController.obtenerContribOne);
router.delete('/:id', contributenteController.eliminarContrib);

module.exports = router;