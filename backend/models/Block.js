// const mongoose = require('mongoose');

// const blockSchema = new mongoose.Schema({
//   id: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//     enum: ['input', 'basic', 'ai', 'geometry'],
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   cpu: {
//     type: Number,
//     required: true
//   },
//   ram: {
//     type: Number,
//     required: true
//   },
//   parameters: [{
//     name: String,
//     type: String,
//     default: mongoose.Schema.Types.Mixed,
//     min: Number,
//     max: Number
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Block', blockSchema);


const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['input', 'basic', 'ai', 'geometry'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cpu: {
    type: Number,
    required: true
  },
  ram: {
    type: Number,
    required: true
  },
  parameters: [{
    name: String,
    type: String,
    default: mongoose.Schema.Types.Mixed,
    min: Number,
    max: Number
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Block', blockSchema);
