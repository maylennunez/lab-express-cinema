const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Iteration 1 


const movieSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String
  },
  director: {
    type: String,
    
  },
  stars: {
    type: Array
  },
  image: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  showtimes: {
    type: Array,
  }
  });

const Movies = mongoose.model('Movies', movieSchema);
module.exports = Movies;