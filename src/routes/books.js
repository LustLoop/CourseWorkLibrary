const express = require('express');
const router = express.Router();

const controller = require('../controllers/books');

router.get('/', controller.getBooks);
router.get('/page/', controller.getBooksOfPage);
router.get('/page/filter', controller.getFilteredBooksOfPage);
router.post('/add', controller.addBook);

module.exports = router;