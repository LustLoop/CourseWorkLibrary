const appRoute = require('./app');
const authorRoute = require('./authors')
const bookRoute = require('./books');
const genreRoute = require('./genre')

module.exports = app => {
  app.use('/', appRoute);
  app.use('/books', bookRoute);
  app.use('/authors', authorRoute);
  app.use('/genres', genreRoute);
}
