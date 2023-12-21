// models/fishDescription.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishDescriptionSchema = new Schema({
  // Definisi skema untuk fishdescription
  image: {
    type: String,
    required: true
  },
  fish_name: {
    type: String,
    required: true
  },
  indo_name: {
    type: String,
    required: true
  },
  phylum: {
    type: String,
    required: true
  },
  order: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  scientific_name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  references_1:{
    type: String,
    required: true
  },  
});

const FishDescription = mongoose.model('FishDescription', fishDescriptionSchema);

module.exports = FishDescription;
