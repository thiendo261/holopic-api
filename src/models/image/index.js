const { Schema, model } = require('mongoose');

const imageSchema = Schema({
  status: {
    type: String,
    enum: ['NORMAL', 'DELETED'],
    required: true,
    default: 'NORMAL',
  },
  title: {
    type: String,
    required: true,
    minLength: 0,
    maxLength: 64,
  },
  user: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  likes: {
    type: [String],
    required: true,
    select: false,
  },
});

const Image = model('Image', imageSchema);
module.exports = Image;