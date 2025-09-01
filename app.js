// Require express
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path') // Required for path.join
const bodyParser = require('body-parser') // To read form
const cookieParser = require('cookie-parser') // To use cookies for name

// Invoke express
const app = express()

// Use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// Use cookie-parser
app.use(cookieParser())

// Set EJS as the view engine
app.set('view engine', 'ejs')
// Set the directory for your EJS template files
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts)

// Set default layout file
app.set('layout', 'layouts/main')

// ROUTE - GET request
app.get('/', (req, res) => {
  res.render('index', { title: 'Flash Cards' })
})

// ROUTE - GET request (on /cards)
app.get('/cards', (req, res) => {
  res.render('card', {
    title: 'Flash Cards',
    prompt: "Who is buried in Grant's tomb?",
    hint: "Think about who's tomb it is."
  })
})

// ROUTE - GET request (on /hello)
app.get('/hello', (req, res) => {
  res.render('hello', { name: req.cookies.username }) // Plural
})

// ROUTE - POST request (on /hello)
app.post('/hello', (req, res) => {
  res.cookie('username', req.body.userName) // Singular
  res.render('hello', { name: req.body.userName })
})

// Set server up
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('The application is running on localhost:3000') //Broadcast what's happening
})
