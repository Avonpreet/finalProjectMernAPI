const mongoose = require('mongoose');

// Product
const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productUrl: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);