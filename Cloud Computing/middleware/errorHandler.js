// middleware/errorHandler.js

function errorHandler(err, req, res, next) {
    // Tangani kesalahan koneksi database atau kesalahan lainnya
    console.error('Error:', err);
  
    // Tanggapi kesalahan ke klien dengan status code yang sesuai dan pesan kesalahan
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.',
    });
  }
  
  module.exports = errorHandler;
  