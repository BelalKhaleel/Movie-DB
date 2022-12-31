const { query } = require('express')
const express = require('express')
const app = express()

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]

app.get('/', (req, res) => {
    res.send("ok")
})

app.get('/test', (req, res) => {
    res.json({status:200, message:"ok"})
})

app.get('/time', (req, res) => {
    let datetime = new Date()
    res.json({message: `${datetime.getHours()}:${datetime.getMinutes()}`})
})

app.get('/hello/:userId', (req, res) => {
    res.json({status:200, message: `Hello, ${req.params.userId}`})
})

app.get('/search', (req, res) => {
    if (req.query.s === undefined || req.query.s === "") {
        console.log(req.query.s);
        res.json({status:500, error:true, message:"you have to provide a search"})
    } else {
    res.json({status:200, message:"ok", data:req.query.s})
    }
})

app.get('/movies/create', (req, res) => {
    const title = req.query.title
    const year = req.query.year
    const rating = req.query.rating || 4
    if (!title || !year || year.length !== 4 || isNaN(year)) {
        res.status(403).json({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
        return;
    }
    const movie = {title, year, rating}
    movies.push(movie)
    res.json({status: 200, data: movies})
})

app.get('/movies/read', (req, res) => {
    res.json({status:200, data: movies })
})

app.get('/movies/read/by-date', (req, res) => {
    movies.sort((a, b) => a.year - b.year)
    res.json({status:200, data: movies })
})

app.get('/movies/read/by-rating', (req, res) => {
    movies.sort((a, b) => b.rating - a.rating)
    res.json({status:200, data: movies })
})

app.get('/movies/read/by-title', (req, res) => {
    movies.sort((a, b) => a.title.localeCompare(b.title))
    res.json({status:200, data: movies })
})

app.get('/movies/read/id/:name', (req, res) => {
    let requestedMovie = movies.filter((c) => c.title === req.params.name);
    if (requestedMovie.length === 0) {
        res.status(404).json({status:404, error:true, message:`the movie ${req.params.name} does not exist`})
    } else {
    res.status(200).json({status:200, data: requestedMovie })
    }
})

app.get('/movies/update', (req, res) => {
    
})

app.get('/movies/delete', (req, res) => {
    
})

app.listen(3000)