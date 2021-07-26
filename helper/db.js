const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb+srv://movie_user:abcd1234@deneme.nwfmi.mongodb.net/movie-api?retryWrites=true&w=majority', { useMongoClient: true});

  mongoose.connection.on('open', () => {
    // console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};
