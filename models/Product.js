const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    
    model: { 
        type: String,
        required: true 
    },
    brand: { 
        type: String, 
        required: true 
    },
    madeInFrance: { 
        type: Boolean, 
        required: true 
    },
    gender: { 
        type: String, 
        required: true 
    },
    material: { 
        type: String, 
        required: true 
    },
    frameShape: { 
        type: String, 
        required: true 
    },
    frameType: { 
        type: String, 
        required: true 
    },
    frameStyle: { 
        type: String, 
        required: true 
    },
    frameSize: { 
        type: String, 
        required: true 
    },
    manufacturerRef: { 
        type: String, 
        required: true 
    },
    imageUrl: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Product', ProductSchema);