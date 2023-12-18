const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  _id: Schema.Types.ObjectId, // Menggunakan ObjectId sebagai tipe data untuk id
  id: {
    type: Number,
    required: true,
    min: 1,
    max: 255,
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1000, // Contoh perubahan panjang maksimal deskripsi
  },
});

module.exports = mongoose.model('Content', contentSchema);
