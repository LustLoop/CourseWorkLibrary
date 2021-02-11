const genreService = require('../services/genre');

const getGenres = (req, res, next) => {
    genreService.getGenres()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const addGenre = (req, res, next) => {
    genreService.addGenre(req.body.title)
        .then((genre) => {
            res.status(201).send(genre);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

module.exports = {
    getGenres,
    addGenre,
};