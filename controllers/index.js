const { Letter } = require('../models')

const createLetter = async (req, res) => {
  console.log('create letter', req.body)
  try {
    const letter = await new Letter(req.body)
    await letter.save()
    return res.status(201).json({
      letter
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getAllLetters = async (req, res) => {
  try {
    const letters = await Letter.find()
    return res.status(200).json({ letters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteLetter= async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Letter.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Letter deleted')
    }
    throw new Error('Letter not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createLetter,
  getAllLetters,
  deleteLetter
}
