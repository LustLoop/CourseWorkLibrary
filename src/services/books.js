const Book = require('../db/schemes/book');

const addBook = (title, author, availability) => {
    return new Book({title, author, availability}).save();
}

const getBooks = () => {
    return Book.find().populate('author')
}

module.exports = {
    addBook,
    getBooks,
}