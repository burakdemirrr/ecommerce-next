import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  images: [{ type: String, required: true }],
  sizes: [{ type: String, required: true }],
  inStock: { type: Boolean, default: true }
}, {
  timestamps: true
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema); 