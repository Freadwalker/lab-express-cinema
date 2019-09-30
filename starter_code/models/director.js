const mongoose= require('mongoose');

const director=mongoose.model('directors',{firstName:String,lastName:String})

module.exports = director;