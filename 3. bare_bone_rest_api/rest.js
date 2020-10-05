const express = require('express')

// initialize express app
const app = express()

// define port variable
const PORT = process.env.PORT || 3000

const dogs = require('./dogs')

app.get('/api/dogs', function (req, res) {
    res.json(dogs)
})

app.get('/api/dogs/:id', function (req, res) {
    var filteredDogs = dogs.filter(dog => dog.id === parseInt(req.params.id))
    if (filteredDogs.length > 0) {
        res.json(filteredDogs[0])
    }
    else {
        res.status(400).json({ "message": "no dog found" })
    }
})



app.listen(PORT, () => console.log(`listening to port ${PORT}`))