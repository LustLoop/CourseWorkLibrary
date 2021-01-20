const Author = require('../db/schemes/author');

const addAuthor = (name) => {
    return new Author({
        name,
    }).save()
}

const getAuthor = () => {
    return Author.find();
}

module.exports = {
    addAuthor,
    getAuthor,
}