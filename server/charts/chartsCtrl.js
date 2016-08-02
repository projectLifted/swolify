const Goal = require('../goal/Goal');

module.exports = {

  getWeightChart(req, res, next) {

      Goal.where('goalOwner').equals(req.params.userId)
        .exec((err, goals) => {
          if (err) {
            return res.status(500).json(err);
          }

          let testData = [];

          goals.forEach((oneGoal)=> {

            if(oneGoal.goalType === "WeightLifting") {

            let workoutData = [];

            oneGoal.workouts.forEach((oneWorkout)=>{

              let workout = {
                x: new Date(oneWorkout.workoutDate).getTime(),
                y: oneWorkout.workoutMax
              }
              workoutData.push(workout);
            })

            let goalData = {
              type: "line",
              showInLegend: true,
              name: oneGoal.goalName,
              legendText: oneGoal.goalName,
              toolTipContent: "{x}: {y} lbs",
              dataPoints: workoutData,
              xValueType: "dateTime"
            }

            testData.push(goalData)

            }

           })
              res.render('weightChart.ejs', {
                chartData: testData
              });
          })
      },
      getCardioChart(req, res, next) {

          Goal.where('goalOwner').equals(req.params.userId)
            .exec((err, goals) => {
              if (err) {
                return res.status(500).json(err);
              }

              let testData = [];

              goals.forEach((oneGoal)=> {

                if(oneGoal.goalType === "Cardio") {

                let workoutData = [];

                oneGoal.workouts.forEach((oneWorkout)=>{

                  let workout = {
                    x: new Date(oneWorkout.workoutDate).getTime(),
                    y: oneWorkout.workoutMileTime
                  }
                  workoutData.push(workout);
                })

                let goalData = {
                  type: "line",
                  showInLegend: true,
                  name: oneGoal.goalName,
                  legendText: oneGoal.goalName,
                  toolTipContent: "{x}: {y} minutes",
                  dataPoints: workoutData,
                  xValueType: "dateTime"
                }

                testData.push(goalData)

                }

               })
                  res.render('cardioChart.ejs', {
                    chartData: testData
                  });
              })
          }
}
