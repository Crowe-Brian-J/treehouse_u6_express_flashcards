const express = require('express')
const router = express.Router()
const { data } = require('../data/flashcardData.json')
const { cards } = data

// ROUTE - GET request (on /cards)
router.get('/:id', (req, res) => {
  res.render('card', {
    title: 'Flash Cards',
    prompt: cards[req.params.id].question,
    hint: cards[req.params.id].hint
  })
})

module.exports = router
