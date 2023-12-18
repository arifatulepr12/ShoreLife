const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/verifyToken'); // Import middleware verifikasi token

// Middleware verifikasi token akan diterapkan pada semua rute di bawah ini
router.use(verifyToken);

// Rute untuk mendapatkan semua pengguna
router.get('/', userController.getAllUsers);

// Rute untuk membuat pengguna baru
router.post('/', userController.createUser);

// Rute untuk mendapatkan detail pengguna berdasarkan ID
router.get('/:id', userController.getUserById);

// Rute untuk mengupdate pengguna berdasarkan ID
router.put('/:id', userController.updateUser);

// Rute untuk menghapus pengguna berdasarkan ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
