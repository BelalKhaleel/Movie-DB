const { query } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({message: "ok"})
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

app.listen(3000)