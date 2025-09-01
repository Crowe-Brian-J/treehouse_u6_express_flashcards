// Require express
const express = require('express')
// Require EJS
const ejs = require('ejs')
const path = require('path') // Required for path.join

// Invoke express
const app = express()

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// Set EJS as the view engine
app.set('view engine', 'ejs')
// Set the directory for your EJS template files
app.set('views', path.join(__dirname, 'views'))

//ROUTE - How to respond on GET request
app.get('/', (req, res) => {
  res.render('index', { title: 'Flash Cards' })
})

//ROUTE - How to respond on GET request (on /cards)
app.get('/cards', (req, res) => {
  res.render('card', {
    title: 'Flash Cards',
    prompt: "Who is buried in Grant's tomb?",
    hint: "Think about who's tomb it is."
  })
})

// Set server up - Currently sends error because we haven't set anything up to retrieve from the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('The application is running on localhost:3000') //Broadcast what's happening
})
