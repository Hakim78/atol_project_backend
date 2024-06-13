const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

dotenv.config();

const products = [
  {
    model: 'EA1162',
    brand: 'Emporio Armani',
    madeInFrance: false,
    gender: 'Homme',
    material: 'Métal',
    frameShape: 'Rectangulaire',
    frameType: 'Nylor',
    frameStyle: 'Classique',
    frameSize: 'Très Large',
    manufacturerRef: 'EA116256173001M',
    imageUrl: 'assets/lunetteVue_Armani.png'  
  },
  {
    model: 'RB2241',
    brand: 'Ray-Ban',
    madeInFrance: false,
    gender: 'Femme, Homme',
    material: 'Plastique',
    frameShape: 'Arrondie',
    frameType: 'Cerclée',
    frameStyle: 'Tendance',
    frameSize: 'Moyen',
    manufacturerRef: 'RB2241S4133451M',
    imageUrl: 'assets/lunette_ray_ban175e.png'  
  },
  {
    model: 'GG1449S',
    brand: 'Gucci',
    madeInFrance: false,
    gender: 'Femme',
    material: 'Autre',
    frameShape: 'Oversize',
    frameType: 'Cerclée',
    frameStyle: 'Couture',
    frameSize: 'Large',
    manufacturerRef: 'GG1449S5519001M',
    imageUrl: 'assets\gucci_sunglasses352e.jpg'  
  }
];

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connected');
    Product.insertMany(products)
      .then(() => {
        console.log('Products added');
        mongoose.connection.close();
      })
      .catch(err => console.error('Error adding products:', err));
  })
  .catch(err => console.error('Database connection error:', err));
