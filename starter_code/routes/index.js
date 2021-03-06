const express = require('express');
const router  = express.Router();
const movieData = require('../bin/seeds');
const Movie = require('../models/Movie.js');
const mongoose = require('mongoose');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs', { img:'/images/cinema.jpg'} );

});




// router.get('/newpage', (req, res, next) => {
//   res.render('newpage')
// })

router.get('/movies', (req, res, next) => {
  Movie.find()
  .then(eachMovie => {
    console.log('Retrieved movie from DB:', eachMovie);
    res.render('movies', { movies: eachMovie });
  }).catch(error => {
    console.log('Error while getting the movies from the DB: ', error);
  })
});
  
// Movie.create(movieData)
// .then(movie => console.log('The movie is saved and its value is: ', movie))
// .catch(error =>
//   console.log('An error happened while looking for movie:', error)
// );

module.exports = router;
