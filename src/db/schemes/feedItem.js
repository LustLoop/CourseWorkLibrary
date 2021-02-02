const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const feedItemScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

const FeedItem = mongoose.model('FeedItem', feedItemScheme);

module.exports = FeedItem;