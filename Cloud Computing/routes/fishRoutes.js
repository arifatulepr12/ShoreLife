const express = require('express');
const router = express.Router();
const fishController = require('../controllers/fishController');
const { verifyToken } = require('../middleware/verifyToken'); // Import middleware verifikasi token

// Middleware verifikasi token akan diterapkan pada semua rute di bawah ini
router.use(verifyToken);

// Rute untuk mendapatkan semua data ikan
router.get('/', fishController.getAllFish);

// Rute untuk membuat ikan baru
router.post('/', fishController.createFish);

// Rute untuk mendapatkan detail ikan berdasarkan ID
router.get('/:id', fishController.getFishById);

// Rute untuk mengupdate ikan berdasarkan ID
router.put('/:id', fishController.updateFish);

// Rute untuk menghapus ikan berdasarkan ID
router.delete('/:id', fishController.deleteFish);

module.exports = router;
