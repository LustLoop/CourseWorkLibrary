const express = require('express');
const router = express.Router();

const controller = require('../controllers/authors');

router.get('/', controller.getAuthors);
router.post('/add', controller.addAuthor);

module.exports = router;