const goalCtrl = require('./goalCtrl');

module.exports = app => {
  app.post('/api/goals', goalCtrl.createGoal);
  app.post('/api/goals/:id', goalCtrl.addWorkout);
  app.delete('/api/goal/:id', goalCtrl.deleteGoal);
  app.put('/api/goal/:id', goalCtrl.updateGoal);
  app.get('/api/goals/:userId', goalCtrl.findUserGoals);
  app.get('/api/goal/:goalId', goalCtrl.getOneGoal);
  app.delete('/api/workout/:goalId/:workoutId', goalCtrl.deleteWorkout);
};
