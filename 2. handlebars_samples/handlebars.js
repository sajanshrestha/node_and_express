var express = require('express')
var hbs = require('express-handlebars')

var app = express()

// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views' }))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))


// person object
var person = {
    name: 'Sajan Shrestha',
    city: 'Jersey City',
    state: 'NJ',
    college: 'New Jersey City University',
    programmingLanguages: ['Swift', 'Dart', 'JavaScript', 'Python']
}


app.get('/', function (req, res) {
    res.render('home', { person: person })
})


app.listen(3000)