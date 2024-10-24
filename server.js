const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./Models/User');
const bcrypt = require('bcryptjs')
const verifyToken = require('./verifyToken')
const authRoutes = require('./routes/authRoutes');
const expenseroutes = require('./routes/expenseroutes');
const incomeroutes = require('./routes/incomeroutes');

require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 5001;

// MongoDB connection URI
const uri = "mongodb+srv://yllkamehmeti:Yllka123456@cluster0.qovfrni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(uri, {});

// Once MongoDB connection is open, log a success message
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Middleware
app.use(cors());
app.use(express.json());



app.use('/api', authRoutes);

app.use('/api/expenses', expenseroutes);

app.use('/api/incomes', incomeroutes);




app.get('/api/check-token', verifyToken, (req, res) => {

  res.json(req.user);

})



/

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



