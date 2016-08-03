const mongoose = require('mongoose');

const Goal = mongoose.Schema({
  goalType: {type: String, required: true},
  goalName: {type: String, required: true},
  goalStartDate: {type: Date},
  goalMax: {type: Number},
  goalDistance: {type: Number},
  goalMileTime: {type: Number},
  workouts: [
    {currentWeight: Number, workoutDate: String, workoutMax: Number, workoutDistance: Number, workoutMileTime: Number}
  ],
  goalOwner: {type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Goal', Goal);
