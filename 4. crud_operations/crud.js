const express = require('express')

var dogs = require('./dogs')

var uuid = require('uuid')

// initialize express app
const app = express()

// define port variable
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => res.send('Dog Rest API'))

// body parser middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api/dogs', function (req, res) {
    res.json(dogs)
})

app.get('/api/dogs/:id', function (req, res) {
    var found = dogs.filter((dog) => dog.id === parseInt(req.params.id))
    if (found.length > 0) {
        res.json(found)
    }
    else {
        res.status(400).json({ 'message': `dog not found for id ${id}` })
    }
})

app.post('/api/dogs', function (req, res) {

    let name = req.body.name
    let breed = req.body.breed

    if (name && breed) {
        var postedDog = {
            id: uuid.v4(),
            name: req.body.name,
            breed: req.body.breed
        }
        dogs.push(postedDog)
        res.json(dogs)
    }
    else {
        res.status(418).json({ 'message': 'go drink tea' })
    }
})

app.delete('/api/dogs/:id', function (req, res) {
    var result = []
    for (i = 0; i < dogs.length; i++) {
        if (dogs[i].id !== req.params.id) {
            result.push(dogs[i])
        }
    }
    dogs = result
    res.json(dogs)
})

app.listen(PORT, () => console.log(`listening to port ${PORT}`))