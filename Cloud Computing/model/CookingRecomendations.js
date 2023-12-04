const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recomendationSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
});

module.exports = mongoose.model('Recaomendation', recomendationSchema);
