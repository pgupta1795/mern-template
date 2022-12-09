const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  password: String,
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  admin: { type: Boolean, default: false },
});

const user = model('user', userSchema, 'user');
model.exports = user;
