const { Schema, model } = require('mongoose')

const MovieSchema = Schema({
  title: String,
  plot: String,
  genre: String,
  cast: String
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;