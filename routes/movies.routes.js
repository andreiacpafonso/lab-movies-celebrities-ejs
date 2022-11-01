const express = require('express')
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/movie')
const router = express.Router()


router.get('/movies', function(req, res, next) {
    Movie.find({}, (err, moviesArray) => {
      if (err) { return next(err); }
  
      res.render('movies/index', {
        title: 'Movies',
        movies: moviesArray
      });
    });
  });

  router.get('/movies/new', (req, res, next)=> {
    res.render('newmovie', {movie: { title: '', plot: '', genre: [], cast:[] }})
  })

  router.post('/', async (req, res) => {
    try {
        await Movie.create({
            title: req.body.title,
            plot: req.body.plot,
            genre: req.body.genre,
            cast: req.body.cast,
        })
        res.redirect('/movies')
    } catch (error) {
      console.log(error)
    }
  })
    
  router.get('/:movieId', async (req, res) => {
    console.log(req.params.movieId)
    const book = await Movie.findById(req.params.movieId)
  
    res.render('movie', { movie })
  })

  router.get('/update/:movieId', async (req, res) => {
    const movie = await Movie.findById(req.params.movieId)
    res.render('newmovie', { movie })
  })

  router.get('/delete/:moviekId', async (req, res) => {
    try {
      await Movie.findByIdAndDelete(req.params.movieId)
      res.redirect('/movies')
    } catch (error) {
      console.log(error)
    }
  })
  
  module.exports = router
