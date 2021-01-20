const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const genreScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
});

const Genre = mongoose.model('Genre', genreScheme);

module.exports = Genre;