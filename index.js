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

app.get('/movies/update', (req, res) => {
    
})

app.get('/movies/delete', (req, res) => {
    
})

app.listen(3000)