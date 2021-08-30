const { Schema } = require('mongoose')

const Letter = new Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },
    body: { type: String, required: true },
    // Genre: { type: String, required: true }
    // publisher_id: { type: Schema.Types.ObjectId, ref: 'publisher_id' }
  },
  { timestamps: true }
)

module.exports = Letter
