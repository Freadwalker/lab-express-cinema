const express = require('express');
const router  = express.Router();

const Movie   = require("../models/movie")
/* GET movie page */

router.get('/movies', (req, res, next) => {
    Movie.find({})
.then(movies =>{
    res.render('movies',{movies})
})
.catch(err=>{
console.log(err);
})
});

module.exports = router;
