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

  deleteGoal(req, res) {
    Goal.findByIdAndRemove(req.params.id, (err, deletedGoal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(deletedGoal);
    });
  },

  updateGoal(req, res) {
    console.log(req.body)
    Goal.findByIdAndUpdate(req.params.id, req.body, (err, updatedGoal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(req.body);
    });
  },

  deleteWorkout(req, res) {
    Goal.findById(req.params.goalId, (err, goal) => {
      if (err) {
        return res.status(500).json(err);
      }

      goal.workouts.pull({_id: req.params.workoutId})
      goal.save();

      return res.status(200).json(goal);

      })
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
  getOneGoal(req, res) {
    Goal.findById(req.params.goalId, (err, goal) => {
      if (err) {
        return res.status(500).json(err);
      }
        return res.status(200).json(goal);
      });
  },

  findUserGoals(req, res) {
    Goal.where('goalOwner').equals(req.params.userId)
      .exec((err, goals) => {
        if (err) {
          return res.status(500).json(err);
        }

        let cardioGoals = [];
        let weightGoals = [];
        let returnedGoals = [];

        goals.forEach((oneGoal)=>{
          if(oneGoal.goalType === "Cardio"){
            cardioGoals.push(oneGoal);
          }
          else if (oneGoal.goalType === "WeightLifting"){
            weightGoals.push(oneGoal);
          }
        })

        weightGoals.forEach((item)=>{
          let workouts = item.workouts;
          let i = 0;
          let workoutMaxTotal = 0;
          workouts.forEach((item)=>{
            i++
            workoutMaxTotal = workoutMaxTotal + item.workoutMax;
          })

          let workoutMaxAvg = workoutMaxTotal / i;
          item.goalMaxProgress = Math.floor(workoutMaxAvg / item.goalMax * 100);

          returnedGoals.push(item);

        })

        cardioGoals.forEach((item)=>{
          let workouts = item.workouts;
          let goalTimeTotal = 0;
          let goalDistanceTotal = 0;
          let i = 0;

          workouts.forEach((item)=>{
            i++
            goalTimeTotal = goalTimeTotal + item.workoutMileTime;
            goalDistanceTotal = goalDistanceTotal + item.workoutDistance;
          })

          item.avgMileTime = parseFloat(goalTimeTotal / i).toFixed(1);
          item.avgDistance = parseFloat(goalDistanceTotal / i).toFixed(1);
          item.goalTimeProgress = Math.floor(item.avgMileTime / item.goalMileTime * 100);
          item.goalDistanceProgress = Math.floor(item.avgDistance / item.goalDistance * 100);

          returnedGoals.push(item);

        })
        return res.status(200).json(returnedGoals);
      });
  }

};
