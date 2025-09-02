const express = require('express')
const router = express.Router()

// ROUTE - GET request (on /cards)
router.get('/', (req, res) => {
  res.render('card', {
    title: 'Flash Cards',
    prompt: "Who is buried in Grant's tomb?",
    hint: "Think about who's tomb it is."
  })
})

module.exports = router
