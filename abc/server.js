const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const transactionRoutes = require('./routes/transactions'); // ✅ THIS IS CASE SENSITIVE

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.error(err));
