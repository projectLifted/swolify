const mongoose = require('mongoose');

const User = mongoose.Schema({
  facebookId: {type: String, required: true},
  firstName: {type: String, trim: true},
  lastName: {type: String, trim: true},
  email: {type: String, trim: true},
  profilePicture: {type: String},
  pictures: [],
  wallPosts: [{message: String, sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}, posterPic: String, posterName: String}],
  bodyType: {type: String},
  heightFeet: {type: Number},
  heightInches: {type: Number},
  startWeight: {type: Number},
  goalWeight: {type: Number},
  gender: { type: String },
  birthDate: { type: Date },
  following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  location: { type: String},
  updated:  { type : Date, default : Date.now }
});

module.exports = mongoose.model('User', User);
