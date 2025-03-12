const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
