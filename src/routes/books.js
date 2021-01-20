const express = require('express');
const router = express.Router();

const controller = require('../controllers/books');

router.get('/', controller.getBooks);
router.post('/add', controller.addBook);

module.exports = router;