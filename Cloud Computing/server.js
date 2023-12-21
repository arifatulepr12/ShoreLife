const express = require('express');
const mongoose = require('mongoose');
const fishContentRoutes = require('./routes/fishContentRoutes');
const fishDescriptionRoutes = require('./routes/fishDescriptionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Koneksi ke MongoDB
mongoose.connect('mongodb+srv://dbFish:dbFishPassword@atlascluster.jmvsnrd.mongodb.net/FishDescription', { useNewUrlParser: true, useUnifiedTopology: true })
.then(
    () => {
        console.log('Database connected successfully');
    },
    error => {
        console.log('Database could not be connected: ' + error);
    }
    );

// Middleware dan konfigurasi lainnya

// Gunakan rute-rute
app.get('/', (req, res) => {
    res.send('Hello World!');
    });
app.use('/FishContent', fishContentRoutes);
app.use('/fishDescription', fishDescriptionRoutes);

// Logika lainnya...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
