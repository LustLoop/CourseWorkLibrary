const Author = require('../db/schemes/author');

const addAuthor = (name) => {
    return new Author({
        name,
    }).save()
}

const getAuthor = () => {
    return Author.find().populate('books');
}

module.exports = {
    addAuthor,
    getAuthor,
}