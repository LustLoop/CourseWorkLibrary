const feedItemService = require('../services/feedItem');

const getFeedItems = (req, res, next) => {
    feedItemService.getFeedItems()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const addFeedItem = (req, res, next) => {
    feedItemService.addFeedItem(req.body.title, req.body.description)
        .then((feedItem) => {
            res.status(201).send(feedItem);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

module.exports = {
    getFeedItems,
    addFeedItem,
};