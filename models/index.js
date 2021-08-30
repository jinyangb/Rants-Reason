const mongoose = require('mongoose')
const LetterSchema = require('./letters')

const Letter = mongoose.model('letters', LetterSchema)

module.exports = {
  Letter
}