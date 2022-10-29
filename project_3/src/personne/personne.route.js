const express = require('express');

const router = express.Router();

const personneController = require('./personne.controllers');


router.get('/', personneController.getAll);
router.get('/:id', personneController.findById);
router.post('/', personneController.add);
router.put('/:id', personneController.update);
router.delete('/:id', personneController.delete);


module.exports = router;