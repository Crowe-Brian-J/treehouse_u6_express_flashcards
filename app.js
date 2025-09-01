// Require express
const express = require('express')

// Invoke express
const app = express()

//ROUTE - How to respond on GET request
app.get('/', (req, res) => {
  res.send('<h1>I love Treehouse!</h1>')
})

//ROUTE - How to respond on GET request (on /hello)
app.get('/hello', (req, res) => {
  res.send('<h1>Hello, JavaScript Developer!</h1>')
})

// Set server up - Currently sends error because we haven't set anything up to retrieve from the server
app.listen(3000, () => {
  console.log('The application is running on localhost:3000') //Broadcast what's happening
})
