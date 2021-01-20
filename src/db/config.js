const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', function () {
    console.log('connection error')
})
db.once('open', function () {
    console.log('we\'re connected!')
})

module.exports = db