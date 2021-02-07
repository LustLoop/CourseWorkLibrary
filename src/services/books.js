const Book = require('../db/schemes/book');

const addBook = (title, description, rating, author, genre, available) => {
    return new Book({title, description, rating, author, genre, available}).save()
}

const getBooks = () => {
    return Book.find().populate('author').populate('genre');
}

const getFewBooks = (page) => {
    return Book.find().skip((page - 1) * 2).limit(2).populate('author').populate('genre');
}

const getFewFilteredBooks = (page, available, genre) => {
    if (available === "true") {
        if (genre) {
            return Book
                .find({available: true, genre: genre})
                .skip((page - 1) * 2).limit(2)
                .populate('author').populate('genre')
        }
        return Book.find({available: true}).skip((page - 1) * 2).limit(2)
    }
    if (genre) {
        return Book
            .find({genre: genre})
            .skip((page - 1) * 2)
            .limit(2)
            .populate('author').populate('genre')
    }
    return Book.find().skip((page - 1) * 2).limit(2).populate('author').populate('genre');
}

const getBooksOfGenre = (genreId) => {
    return Book.find({'genre._id': genreId})
}

module.exports = {
    addBook,
    getBooks,
    getBooksOfGenre,
    getFewBooks,
    getFewFilteredBooks
}