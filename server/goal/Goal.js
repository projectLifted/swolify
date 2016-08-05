const mongoose = require('mongoose');

const Goal = mongoose.Schema({
  goalType: {type: String, required: true},
  goalName: {type: String, required: true},
  goalStartDate: {type: Date},
  goalMax: {type: Number},
  goalDistance: {type: Number},
  goalMileTime: {type: Number},
  goalMaxProgress: {type: Number, default: 0},
  avgDistance: {type: Number, default: 0},
  avgMileTime: {type: Number, default: 0},
  goalTimeProgress: {type: Number, default: 0},
  goalDistanceProgress: {type: Number, default: 0},
  workouts: [
    {currentWeight: Number, workoutDate: String, workoutMax: Number, workoutDistance: Number, workoutMileTime: Number}
  ],
  goalOwner: {type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Goal', Goal);
