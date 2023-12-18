const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');
const { verifyToken } = require('../middleware/verifyToken'); // Import middleware verifikasi token

// Middleware verifikasi token akan diterapkan untuk seluruh rute di bawah ini
router.use(verifyToken);

// Rute untuk mendapatkan semua konten terkait ikan
router.get('/', contentController.getAllContent);

// Rute untuk membuat konten baru terkait ikan
router.post('/', contentController.createContent);

// Rute untuk mendapatkan detail konten terkait ikan berdasarkan ID
router.get('/:id', contentController.getContentById);

// Rute untuk mengupdate konten terkait ikan berdasarkan ID
router.put('/:id', contentController.updateContent);

// Rute untuk menghapus konten terkait ikan berdasarkan ID
router.delete('/:id', contentController.deleteContent);

module.exports = router;
