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

const getFewFilteredBooks = (page, available, genres) => {
    if (available === "true") {
        if (genres) {
            console.log(1)
            console.log(genres)
            return Book
                .find({available: true, genre: genres})
                .skip((page - 1) * 2).limit(2)
                .populate('author').populate('genre')
        }
        console.log(2)
        return Book.find({available: true}).skip((page - 1) * 2).limit(2)
    }
    if (genres) {
        console.log(3)
        return Book
            .find({genre: genres})
            .skip((page - 1) * 2)
            .limit(2)
            .populate('author').populate('genre')
    }
    console.log(4)
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