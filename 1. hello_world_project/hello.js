var express = require('express')
var hbs = require('express-handlebars')

var app = express()

const PORT = process.env.PORT || 3000

// view engine setup
app.engine('hbs', hbs({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views' }))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))


app.get('/', function (req, res) {
    res.render('home', { title: 'Home Page' })
})

app.get('/about', function (req, res) {
    res.render('about', { title: 'About Page' })
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}.`))
