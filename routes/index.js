const express = require('express')
const router = express.Router()

// ROUTE - GET request
router.get('/', (req, res) => {
  const name = req.cookies.username
  if (typeof name === 'undefined') {
    res.redirect('/hello')
  } else {
    res.render('index', { title: 'Flash Cards', name })
  }
})

// ROUTE - GET request (on /hello)
router.get('/hello', (req, res) => {
  const name = req.cookies.username
  if (typeof name === 'undefined') {
    res.render('hello', { name: req.cookies.username }) // Plural
  } else {
    res.redirect('/')
  }
})

// ROUTE - POST request (on /hello)
router.post('/hello', (req, res) => {
  res.cookie('username', req.body.userName) // Singular
  res.redirect('/')
})

// ROUTE - POST request (on /logout)
router.post('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('hello')
})

module.exports = router
