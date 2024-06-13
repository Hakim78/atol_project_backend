const express = require('express');
const connectDB = require('./configuration/databases');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const productRoutes = require('./routes/productRoutes');

dotenv.config();

// connexion à la base de donnée 
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// pour gérer les images static télécharger
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(
        `Server is running on port ${PORT}`
    ) 
);