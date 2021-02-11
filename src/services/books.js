const Book = require('../db/schemes/book');

const getBooksToSkip = (page) => {
    return (page - 1) * 2;
}

const addBook = (title, description, rating, author, genres, available) => {
    return new Book({title, description, rating, author, genres, available}).save()
}

const getBooks = () => {
    return Book.find().populate('author').populate('genres');
}

const getBooksOfPage = (page) => {
    return Book.find().skip(getBooksToSkip(page)).limit(2).populate('author').populate('genres');
}

const getFilteredBooksOfPage = (page, available, genres) => {
    let filteredBooks = Book.find();
    if (available === "true") {
        filteredBooks = filteredBooks.find({available: true});
    }
    if (genres) {
        filteredBooks = filteredBooks.find({genres: genres});
        // filteredBooks = filteredBooks.filter(book => book.genres.some(genre => genres.includes(genre)));
    }
    return filteredBooks.skip(getBooksToSkip(page)).limit(2).populate('author').populate('genres');
}

const getBooksOfGenre = (genreId) => {
    return Book.find({'genre._id': genreId})
}

module.exports = {
    addBook,
    getBooks,
    getBooksOfGenre,
    getBooksOfPage,
    getFilteredBooksOfPage
}