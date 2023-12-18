const jwt = require('jsonwebtoken');
const secretKey = 'secretKey'; // Sama dengan kunci rahasia yang digunakan untuk membuat token

function verifyToken(req, res, next) {
  const token = req.headers.authorization; // Ambil token dari header Authorization

  // Cek apakah token ada
  if (!token) {
    return res.status(401).json({ message: 'Token tidak tersedia' });
  }

  // Verifikasi token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Token tidak valid' });
    }

    // Jika token valid, data dekoded tersedia di decoded
    req.user = decoded; // Tambahkan informasi pengguna ke objek request
    next(); // Lanjut ke middleware atau rute selanjutnya
  });
}

module.exports = { verifyToken };
