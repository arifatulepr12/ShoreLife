const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  // Menggunakan ObjectId sebagai tipe data untuk id
  _id: Schema.Types.ObjectId,
  photo: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        // Validasi URL foto
        // Contoh validasi sederhana, bisa disesuaikan sesuai kebutuhan
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
      },
      message: 'URL foto tidak valid',
    },
  },
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  scientificName: {
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
  habitat: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
});

module.exports = mongoose.model('Fish', fishSchema);
