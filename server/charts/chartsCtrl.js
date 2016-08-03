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

            workoutData.sort((a, b)=> {
                if (a.x > b.x) {
                  return 1;
                }
                if (a.x < b.x) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });

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


                workoutData.sort((a, b)=> {
                    if (a.x > b.x) {
                      return 1;
                    }
                    if (a.x < b.x) {
                      return -1;
                    }
                    // a must be equal to b
                    return 0;
                  });


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
          },
          getBodyWeightChart(req, res, next) {

              Goal.where('goalOwner').equals(req.params.userId)
                .exec((err, goals) => {
                  if (err) {
                    return res.status(500).json(err);
                  }

                  let testData = [];
                  let workoutData = [];



                  goals.forEach((oneGoal)=> {

                    oneGoal.workouts.forEach((oneWorkout)=>{

                      if (oneWorkout.currentWeight) {

                      let workout = {
                        x: new Date(oneWorkout.workoutDate).getTime(),
                        y: oneWorkout.currentWeight
                      }


                      workoutData.push(workout);

                      }

                    })

                   })

                     workoutData.sort((a, b)=> {
                         if (a.x > b.x) {
                           return 1;
                         }
                         if (a.x < b.x) {
                           return -1;
                         }
                         // a must be equal to b
                         return 0;
                       });



                      for(let i = 0; i < workoutData.length; i++ ){
                        let z = i + 1;
                        if(workoutData[i].x === workoutData[z].x){
                          workoutData.splice(z, 1);
                        }
                      }


                       let goalData = {
                         type: "line",
                         showInLegend: false,
                         name: "Body Weight",
                         legendText: "Body Weight",
                         toolTipContent: "{x}: {y} lbs",
                         dataPoints: workoutData,
                         xValueType: "dateTime"
                       }


                       testData.push(goalData)

                      res.render('bodyWeightChart.ejs', {
                        chartData: testData
                      });
                  })
              }
}
