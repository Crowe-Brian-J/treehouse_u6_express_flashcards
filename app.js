// Require express
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path') // Required for path.join
const bodyParser = require('body-parser') // To read form
const cookieParser = require('cookie-parser') // To use cookies for name

// Get routes from routes folder
const routes = require('./routes/index')

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

// Use routes from routes folder
app.use('/', routes)

/* app.use((req, res, next) => {
  req.message = 'This message made it!'
  const err = new Error('Oh noes!')
  err.status = 500
  next()
  -- App hangs when next() is not called - express relies on next() to know when to move forward -OR- moves forward by sending a res(ponse)
})

app.use((req, res, next) => {
  console.log(req.message)
  next()
}) */

// 404 Error Handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error Middleware has 4 parameters (err at beginning) - Regular Middware: 3
app.use((err, req, res, next) => {
  res.locals.error = err
  res.status(err.status)
  res.render('error', err)
})

// Set server up
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('The application is running on localhost:3000') //Broadcast what's happening
})
