const appRoute = require('./app');
const authorRoute = require('./authors');
const bookRoute = require('./books');
const genreRoute = require('./genre');
const feedRoute = require('./feed')

module.exports = app => {
  app.use('/api/', appRoute);
  app.use('/api/books', bookRoute);
  app.use('/api/authors', authorRoute);
  app.use('/api/genres', genreRoute);
  app.use('/api/feed', feedRoute)
}
