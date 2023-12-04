const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FunFactSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
  funfact: {
    type: String,
    required: true,
    min: 5,
    max: 255,
  },
});

module.exports = mongoose.model('FunFact', FunFactSchema);
