const express = require('express');
const router = express.Router();

const controller = require('../controllers/books');

router.get('/', controller.getBooks);
router.get('/page/:id', controller.getSetOfBooks);
router.get('/page/:id/filter', controller.getFilteredSetOfBooks);
router.post('/add', controller.addBook);

// get one book
// router.get('/:id', controller.getSetOfBooks);

module.exports = router;