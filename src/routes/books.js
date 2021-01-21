const express = require('express');
const router = express.Router();

const controller = require('../controllers/books');

router.get('/', controller.getBooks);
router.get('/byGenre/:id', controller.getOfGenre)
router.post('/add', controller.addBook);

module.exports = router;