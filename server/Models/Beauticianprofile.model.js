const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  imageFile: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
});

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  services: { type: Map, of: Boolean },
  email: { type: String, required: true },
  instagram: { type: String, required: true },
  businessHours: [
    {
      day: { type: String },
      time: { type: String },
    },
  ],
  works: [workSchema],
});

module.exports = mongoose.model('Profile', profileSchema);
