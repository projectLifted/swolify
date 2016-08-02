const mongoose = require('mongoose');

const Goal = mongoose.Schema({
  goalType: {type: String, required: true},
  goalName: {type: String, required: true},
  goalStartDate: {type: Date},
  goalEndDate: {type: Date}, // This will be required as true later on
  goalMax: {type: Number},
  goalDistance: {type: Number},
  goalMileTime: {type: Number},
  workouts: [
    {workoutDate: String, workoutMax: Number, workoutDistance: Number, workoutMileTime: Number}
  ],
  goalOwner: {type: mongoose.Schema.Types.ObjectId}
});

module.exports = mongoose.model('Goal', Goal);
