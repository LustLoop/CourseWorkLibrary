const mongoose = require('mongoose');
const Schema = require('mongoose');

mongoose.set('useCreateIndex', true);

const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    rating: {
        type: Number,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    },
    genres: [{
        type: Schema.Types.ObjectId,
        ref: 'Genre',
    }],
    available: {
        type: Boolean,
    },
});

const Book = mongoose.model('Book', bookScheme);

module.exports = Book;