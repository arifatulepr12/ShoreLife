const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler'); // Import middleware errorHandler

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk menangani permintaan yang dikirim dengan format JSON
app.use(express.json());

// Routes
const fishRoutes = require('./routes/fishRoutes');
const contentRoutes = require('./routes/contentRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/fish', fishRoutes);
app.use('/content', contentRoutes);
app.use('/user', userRoutes);

// Database connection
mongoose.connect('mongodb+srv://dbFish:dbFishPassword@atlascluster.jmvsnrd.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Connection to MongoDB failed:', error);
});

// Gunakan middleware errorHandler untuk menangani kesalahan
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
