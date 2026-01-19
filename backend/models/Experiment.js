// const mongoose = require('mongoose');

// const experimentSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   difficulty: {
//     type: String,
//     enum: ['Beginner', 'Intermediate', 'Advanced'],
//     default: 'Beginner'
//   },
//   duration: {
//     type: String,
//     required: true
//   },
//   steps: [{
//     title: String,
//     description: String,
//     code: String,
//     hints: [String]
//   }],
//   category: {
//     type: String,
//     enum: ['basic', 'ai', 'geometry', 'advanced'],
//     default: 'basic'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Experiment', experimentSchema);


const mongoose = require('mongoose');

const experimentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  duration: {
    type: String,
    required: true
  },
  steps: [{
    title: String,
    description: String,
    code: String,
    hints: [String]
  }],
  category: {
    type: String,
    enum: ['basic', 'ai', 'geometry', 'advanced'],
    default: 'basic'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Experiment', experimentSchema);
