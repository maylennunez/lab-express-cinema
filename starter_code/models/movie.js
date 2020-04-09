const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Iteration 1 


const movieSchema = new Schema({
  // TODO: write the schema
  title: {type: String, required: true},
  director: {type: String},
  stars: {type: Array},
  image: {type: String},
  description: {type: String},
  showtimes: {type: Array}
  });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;