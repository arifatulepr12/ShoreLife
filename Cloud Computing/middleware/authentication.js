const jwt = require('jsonwebtoken');
const secretKey = 'secretKey'; // Ganti dengan kunci rahasia yang kuat

function authenticateUser(req, res) {
  // Misalnya, Anda memiliki metode autentikasi pengguna
  // Di sini hanya contoh, Anda harus menggantinya dengan logika autentikasi yang sesuai
  const { username, password } = req.body;

  // Cek apakah username dan password valid (contoh sederhana)
  if (username === 'user' && password === 'password') {
    // Buat token JWT
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' }); // Ganti dengan waktu kedaluwarsa yang sesuai

    // Kirim token sebagai respons
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Autentikasi gagal' });
  }
}

module.exports = { authenticateUser };
