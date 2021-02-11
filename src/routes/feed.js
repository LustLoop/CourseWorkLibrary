const express = require('express');
const router = express.Router();

const controller = require('../controllers/feedItems');

router.get('/', controller.getFeedItems);
router.post('/add', controller.addFeedItem);

module.exports = router;