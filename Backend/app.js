const express = require('express');

const mongoose = require('mongoose')

const app = express();

//Middleware

app.use('/' , (req,res,next) => {
    res.send("This is our Starting App")
})

mongoose.connect("mongodb+srv://bookapp:bookapp123@cluster0.cac3ogc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log('Connected To Database'))
    .then(() => {

        app.listen(5000);
    })
    .catch((err) => console.log(err));