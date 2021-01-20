const mongoose = require('mongoose');
const Schema = require('mongoose');

mongoose.set('useCreateIndex', true);

const bookScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
    },
    availability: {
        type: Boolean,
    }
});

const Book = mongoose.model('Book', bookScheme);

module.exports = Book;