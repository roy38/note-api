const express = require('express');
const router = express.Router();

const notesController = require('../controller/notes.controller');

router.get('/', notesController.getAll);
router.get('/:id', notesController.getById);
router.post('/', notesController.create);
router.put('/:id', notesController.update);
router.delete('/:id', notesController.delete);

module.exports = router;