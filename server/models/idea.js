const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      maxlength: 100,
      required: [true, 'Title cannot be empty.']
    },
    content: [
      {
        type: String
      }
    ],
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Idea = mongoose.model('Idea', ideaSchema);

module.exports = Idea;
