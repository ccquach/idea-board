const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 20,
      required: [true, 'Title cannot be empty.']
    },
    content: {
      type: String,
      maxlength: 100
    },
    completed: {
      type: Boolean,
      default: false
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Priority cannot be empty.']
    }
  },
  {
    timestamps: true
  }
);

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
