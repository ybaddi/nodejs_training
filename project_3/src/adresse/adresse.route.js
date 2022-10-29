const express = require('express');

const router = express.Router();

const adresseController = require('adresse.controllers');


routrer.get('/', adresseController.getAll);
routrer.get('/:id', adresseController.findById());
routrer.post('/', adresseController.add);
routrer.put('/:id', adresseController.update);
routrer.delete('/:id', adresseController.delete);


module.exports = router;