// Require express
const express = require('express')

// Invoke express
const app = express()

app.get('/', (request, response) => {
  response.send('I love Treehouse!')
})

// Set server up - Currently sends error because we haven't set anything up to retrieve from the server
app.listen(3000)
