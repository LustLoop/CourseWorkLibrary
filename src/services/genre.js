const Genre = require('../db/schemes/genre');

const addGenre = (title) => {
    return new Genre({
        title
    }).save();
}

const getGenres = () => {
    return Genre.find();
}

module.exports = {
    addGenre,
    getGenres,
}