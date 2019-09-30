const express = require('express');
const router  = express.Router();

const Director   = require("../models/director")


router.get('/create-director',(req,res,next)=>{
    res.render('create-director')
})

router.post('/create-director',(req,res,next)=>{
    var newDirector= Director({
        firstName:req.body.firstName,
        lastName:req.body.lastName
    }).save()
    
    .then((director)=>{
        res.redirect("/movies")
    })

    .catch((err)=>{
        console.log(err)
    })

})


module.exports=router;