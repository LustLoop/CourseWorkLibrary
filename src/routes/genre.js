const express = require('express');
const router = express.Router();

const controller = require('../controllers/genre');

router.get('/', controller.getGenres);
router.post('/add', controller.addGenre);

module.exports = router;