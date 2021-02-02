const FeedItem = require('../db/schemes/feedItem');

const addFeedItem = (title, description) => {
    return new FeedItem({title, description}).save();
}

const getFeedItems = () => {
    return FeedItem.find();
}

module.exports = {
    addFeedItem,
    getFeedItems,
}