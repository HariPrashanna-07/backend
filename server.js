const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();   // ✅ REQUIRED

const app = express();

// ✅ Render provides its own PORT
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);

// ✅ MongoDB Atlas (NOT localhost)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Mongo Error:', err));
