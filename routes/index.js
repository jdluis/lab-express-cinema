const { Router } = require('express');
const express = require('express');
const router = express.Router();
const MoviesModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page --> take data from movies */

router.get('/movies', async (req, res, next) => {
    const getMovies = await MoviesModel.find()
    try {
        res.render('movies.hbs', {
            movies: getMovies
        })
    } catch (err){
        next(err)
    }
})

/* GET movie from id page --> take data from movies */

router.get('/movies/:idMovie', async (req, res, next) => {
    try {
        const idMovie = req.params.idMovie;
        const getMovie = await MoviesModel.findById(idMovie)
        res.render('movie.hbs', {
            movie: getMovie
        })
    } catch (err){
        next(err)
    }
})

module.exports = router;
