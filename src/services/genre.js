const Genre = require('../db/schemes/genre');

const addGenre = (title) => {
    return new Genre({
        title
    }).save();
}

const getGenres = () => {
    return Genre.find();
}

const getGenreById = (id) => {
    return Genre.findOne({'_id': id});
}

module.exports = {
    addGenre,
    getGenres,
}