const express = require('express');
const router  = express.Router();
const mongoose= require("mongoose")
const Movie   = require("../models/movie")
const Director= require("../models/director")


router.get('/create-movie', (req, res, next) => {
    Director.find({})
    .then((director)=>{
        res.render('create-movie',{director});
    })
    .catch((err)=>{
        console.log(err)
    })
  });

router.post('/create-movie',(req,res)=>{

var newMovie=

new Movie(
    
{title:req.body.movieTitle,director:mongoose.Types.ObjectId(req.body.movieDirector)
    ,description:req.body.movieDescription,image:req.body.movieImage})
newMovie.save()
.then((movie)=>{
    res.redirect("/movies")
})
.catch((err)=>{
    console.log(err)
})

})
// router.post("/display-movie",(req, res, next) =>{
//     var newMovie= new Movie('create-movie',)
// });


module.exports=router;