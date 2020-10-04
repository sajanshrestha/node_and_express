const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

const dogs = require('./dogs')

app.get('/api/dogs', function (req, res) {
    res.json(dogs)
})

app.get('/api/dogs/:id', function (req, res) {
    var filteredDogs = dogs.filter(dog => dog.id === parseInt(req.params.id))
    if (filteredDogs.length === 0) {
        res.json({ "message": "no dog found" })
    }
    else {
        res.json(filteredDogs[0])
    }
})


app.listen(PORT, () => console.log(`listening to port ${PORT}`))