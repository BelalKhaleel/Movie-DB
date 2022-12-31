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


app.listen(3000)