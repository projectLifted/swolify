const mongoose = require('mongoose');

const User = mongoose.Schema({
  facebookId: {type: String, required: true},
  firstName: {type: String, trim: true},
  lastName: {type: String, trim: true},
  email: {type: String, trim: true},
  profilePicture: {type: String},
  pictures: [{pic: String, caption: String, date: Date}],
  wallPosts: [{message: String, sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}],
  updatedDate: {type: Date},
  heightFeet: {type: Number},
  heightInches: {type: Number},
  startWeight: {type: Number},
  goalWeight: {type: Number},
  gender: { type: String },
  birthDate: { type: Date },
  followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  location: {city: String, state: String}
});

module.exports = mongoose.model('User', User);
