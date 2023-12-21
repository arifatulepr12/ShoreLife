// models/fishContent.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishContentSchema = new Schema({
  // Definisi skema untuk fishcontent
  image_tag: {
    type: String,
    required: true
  },
  content_name: {
    type: String,
    required: true
  },
  fish_name: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  references:{
    type: String,
    required: true
  },
  });

const FishContent = mongoose.model('FishContent', fishContentSchema);

module.exports = FishContent;
