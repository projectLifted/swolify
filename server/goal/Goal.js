const mongoose = require('mongoose');

const Goal = mongoose.Schema({
  goalType: {type: String, required: true},
  goalName: {type: String, required: true},
  goalStartDate: {type: Date},
  goalEndDate: {type: Date}, // This will be required as true later on
  goalReps: {type: Number},
  goalWeight: {type: Number},
  goalDistance: {type: Number},
  goalTime: {type: Number},
  workouts: [
    {workoutDate: Date, workoutReps: Number, workoutWeight: Number, workoutDistance: Number, workoutTime: Number, percentRepChange: Number, percentWeightChange: Number, percentMileTimeChange: Number}
  ]
});

module.exports = mongoose.model('Goal', Goal);
