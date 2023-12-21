// routes/fishContentRoutes.js
const express = require('express');
const router = express.Router();
const FishContent = require('../models/fishContent');

// Rute-rute terkait fishcontent
router.get('/', async (req, res) => {
  try {
    const fishContent = await FishContent.find();
    res.json(fishContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rute-rute lainnya untuk operasi CRUD pada fishcontent

module.exports = router;
