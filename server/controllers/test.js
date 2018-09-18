const MovieSchema = require('../models/test.js');

module.exports.controller = (app) => {
    // add a new movie to movies collection
    app.post('/movies', (req, res) => {
        console.info("body: ", req.body);
        console.info("params: ", req.params);
        const newMovie = new MovieSchema({
            name: req.body.name,
            description: req.body.description,
            release_year: req.body.release_year,
            genre: req.body.genre
        });

        newMovie.save((error, movie) => {
            if (error) { console.log(error); }
            res.send(movie);
        })
    });
};