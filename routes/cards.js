const express = require('express')
const router = express.Router()
const { data } = require('../data/flashcardData.json')
const { cards } = data

// ROUTE - GET request (on /cards)
router.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * cards.length)
  res.redirect(`/cards/${randomIndex}`)
})

// ROUTE - GET request (on /cards/:id)
router.get('/:id', (req, res) => {
  const { side } = req.query
  const { id } = req.params

  const validSides = ['question', 'answer']

  if (!validSides.includes(side)) {
    // Default: redirect to question side if no query provided
    return res.redirect(`/cards/${id}?side=question`)
  }

  const text = cards[id][side]
  const { hint } = cards[id]

  const templateData = { id, text, side }

  if (side === 'question') {
    templateData.hint = hint
  }

  res.render('card', templateData)
})

module.exports = router
