const mongoose= require('mongoose');

// var movieSchema= new mongoose.Schema({
//     title:String,
//     director: String,
//     stars: Array,
//     image:String,
//     description:String,
//     showtimes: Array
// })

// const movie= mongoose.model('movies',movieSchema)

const movie= mongoose.model('movies', {
    title:String,
    director: String,
    stars: Array,
    image:String,
    description:String,
    showtimes: Array
})

module.exports = movie;