const Book = require('../db/schemes/book');

const addBook = (title, author, genre, availability) => {
    return new Book({title, author, genre, availability}).save();
}

const getBooks = () => {
    return Book.find().populate('author').populate('genre');
}

module.exports = {
    addBook,
    getBooks,
}