const mongoose = require('mongoose');
const Schema = require('mongoose');

mongoose.set('useCreateIndex', true);

const bookScheme = new mongoose.Schema({
    title: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
    },
    availability: {
        type: Boolean,
    }
});

const Book = mongoose.model('Book', bookScheme);

module.exports = Book;