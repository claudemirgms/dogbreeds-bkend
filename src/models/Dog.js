const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  type_id: String,  
  name: String,  
  size: String,
  weight: String,
  longevity: String,
  origin: String,
  colors:[String],
  colorsinformation: String,
  characteristics: [String],
  hmexercise: Number,
  hmhygiene: Number,
  trainingfacility: Number,
  sociability: Number,
  introdution: String,
  description: String,
  kannelclub: Boolean,
});

module.exports = mongoose.model('Dog', DogSchema);