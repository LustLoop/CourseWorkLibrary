const appRoute = require('./app');
const authorRoute = require('./authors')
const bookRoute = require('./books');

module.exports = app => {
  app.use('/', appRoute);
  app.use('/books', bookRoute);
  app.use('/authors', authorRoute);
}
