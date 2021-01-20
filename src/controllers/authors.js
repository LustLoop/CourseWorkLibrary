const authorService = require('../services/author');

const getAuthors = (req, res, next) => {
    authorService.getAuthor()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const addAuthor = (req, res, next) => {
    authorService.addAuthor(req.body.title, req.body.author, true)
        .then((author) => {
            res.status(201).send(author);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

module.exports = {
    getAuthors,
    addAuthor,
};