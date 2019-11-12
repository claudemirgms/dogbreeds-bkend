const mongoose = require('mongoose');

const TypeSchema = new mongoose.Schema({
  type: String,
});

module.exports = mongoose.model('Type', TypeSchema);