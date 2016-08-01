const Goal = require('./Goal');

module.exports = {
  createGoal(req, res) {
    new Goal(req.body).save((err, goal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json(goal);
    });
  },

  // findUserGoal(req, res) {
  //   Goal.findById(req.params.id, (err, goal) => {
  //     if (err) {
  //       return res.status(500).json(err);
  //     }
  //     return res.status(200).json(goal);
  //   });
  // },

  deleteGoal(req, res) {
    Goal.findByIdAndRemove(req.params.id, (err, deletedGoal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(deletedGoal);
    });
  },

  updateGoal(req, res) {
    Goal.findByIdAndUpdate(req.params.id, req.body, (err, updatedGoal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(updatedGoal);
    });
  },

  addWorkout(req, res) {
    Goal.findById(req.params.id, (err, goal) => {
      if (err) {
        return res.status(500).json(err);
      }
      goal.workouts.push(req.body);
      goal.save((err, goal) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(goal);
      });
    });
  },

  findUserGoals(req, res) {
    Goal.where('goalOwner').equals(req.params.userId)
      .exec((err, goals) => {
        if (err) {
          return res.status(500).json(err);
        }
        let returnedGoals = [];
        goals.map((goal) => {
          if (goal.goalType === "WeightLifting") {
            goal.workouts.length > 0 ?
            goal.goalMaxProgress = ((goal.workouts[goal.workouts.length - 1].workoutMax - goal.workouts[0].workoutMax) / (goal.goalMax - goal.workouts[0].workoutMax))
             :
            goal.goalMaxProgress = 0;

            returnedGoals.push({
              _id: goal._id,
              goalType: goal.goalType,
              goalMax: goal.goalMax,
              goalOwner: goal.goalOwner,
              goalStartDate: goal.goalStartDate,
              goalEndDate: goal.goalEndDate,
              goalName: goal.goalName,
              goalMaxProgress: goal.goalMaxProgress * 100,
              workouts: goal.workouts,
            });
          }
          else { // Else condition is "Cardio"
            let totalDistance = 0;
            let totalTimeOfAvgs = 0;
            let avgMileMinutes = 0;
            let avgMileSeconds = 0;
            goal.workouts.length === 0 ?
            goal.goalProgress = 0
              :
            goal.distanceProgress = ((goal.workouts[goal.workouts.length - 1].workoutDistance - goal.workouts[0].workoutDistance) / (goal.goalDistance - goal.workouts[0].workoutDistance))
            goal.timeProgress = ((goal.workouts[goal.workouts.length - 1].workoutMileTime - goal.workouts[0].workoutMileTime) / (goal.goalMileTime - goal.workouts[0].workoutMileTime))
            goal.workouts.map(workout => {
              totalDistance += workout.workoutDistance;
              totalTimeOfAvgs += workout.workoutMileTime;
            });

            function getMinutesAndSeconds() {
              let mileTimeAvg = parseFloat((totalTimeOfAvgs / goal.workouts.length).toFixed(1));
              let nums = mileTimeAvg.toString().split('.');
              avgMileMinutes = parseInt(nums[0]);
              avgMileSeconds = (parseInt(nums[1]) / 10) * 60;
            }
            getMinutesAndSeconds();

            returnedGoals.push({
              _id: goal._id,
              goalDistance: goal.goalDistance,
              goalEndDate: goal.goalEndDate,
              goalMileTime: goal.goalMileTime,
              goalName: goal.goalName,
              goalOwner: goal.goalOwner,
              goalType: goal.goalType,
              distanceProgress: Math.floor(goal.distanceProgress * 100),
              timeProgress: Math.floor(goal.timeProgress * 100),
              workouts: goal.workouts,
              distanceAvg: parseFloat((totalDistance / goal.workouts.length).toFixed(1)),
              mileMinutesAvg: avgMileMinutes,
              milesSecondsAvg: avgMileSeconds
            });
          }
        })

        return res.status(200).json(returnedGoals);
      });
  }

};
