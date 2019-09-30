const express = require('express');
const router  = express.Router();

const Movie   = require("../models/movie")

router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params.id)
    .then((movie)=>{
        res.render("singleMovie",{movie})
    })
    .catch((err)=>{
            console.log(err)
    })
  });

module.exports = router;