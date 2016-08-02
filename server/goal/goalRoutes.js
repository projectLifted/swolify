const goalCtrl = require('./goalCtrl');

module.exports = app => {
  app.post('/api/goals', goalCtrl.createGoal);
  app.post('/api/goals/:id', goalCtrl.addWorkout);
  app.delete('/api/goals/:id', goalCtrl.deleteGoal);
  app.put('/api/goals/:id', goalCtrl.updateGoal);
  app.get('/api/goals/:userId', goalCtrl.findUserGoals);
};
