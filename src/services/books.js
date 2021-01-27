const Book = require('../db/schemes/book');

const addBook = (title, description, rating, author, genre, available) => {
    return new Book({title, description, rating, author, genre, available}).save();
}

const getBooks = () => {
    return Book.find().populate('author').populate('genre');
}

const getBooksOfGenre = (genreId) => {
    return Book.find({'genre._id': genreId})
}

module.exports = {
    addBook,
    getBooks,
    getBooksOfGenre,
}