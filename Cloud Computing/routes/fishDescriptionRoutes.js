// routes/fishDescriptionRoutes.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const FishDescription = require('../models/fishDescription'); // Sesuaikan dengan struktur nama model Anda

router.get('/:id', async (req, res) => {
  const fishId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(fishId)) {
    return res.status(400).json({ error: 'Invalid ObjectID' });
  }

  try {
    const fishDescriptionData = await FishDescription.findById(fishId);

    if (!fishDescriptionData) {
      return res.status(404).json({ error: 'Fish description not found' });
    }

    res.json(fishDescriptionData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rute-rute lainnya...

module.exports = router;
