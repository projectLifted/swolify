const mongoose = require('mongoose');

const User = mongoose.Schema({
  facebookId: {type: String, required: true},
  loginPhoto: {type: String},
  firstName: {type: String, trim: true},
  lastName: {type: String, trim: true},
  email: {type: String, trim: true},
  profilePicture: {type: String},
  pictures: [{pic: String, caption: String, date: Date}],
  wallPosts: [{message: String, sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}],
  updatedDate: {type: Date},
  height: {type: Number},
  weight: {type: Number},
  gender: { type: String },
  followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  location: {city: String, state: String},
  bmi: {type: Number},
  profilePublicStatus: {type: Boolean},
  goals: [{type: mongoose.Schema.Types.ObjectId, ref: 'Goal'}]
});

module.exports = mongoose.model('User', User);
