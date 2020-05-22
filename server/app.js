const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001

const db = require('./queries')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res) => {
   res.send("hello world")
});

//GET movies
app.get('/movies', db.getMovies)

//GET movie by id


//Get review by id


//POST review


//Create new movie

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
