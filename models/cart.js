const mongoose = require('mongoose');

// Product
const CartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Cart', CartSchema);