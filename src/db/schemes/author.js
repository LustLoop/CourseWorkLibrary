const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const authorScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Author = mongoose.model('Author', authorScheme);

module.exports = Author;