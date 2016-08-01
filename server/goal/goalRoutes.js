const goalCtrl = require('./goalCtrl');

module.exports = app => {
  app.post('/api/goals', goalCtrl.createGoal);
  app.post('/api/goals/:id', goalCtrl.addWorkout);
  app.get('/api/goals/:id', goalCtrl.findUserGoal);
  app.delete('/api/goals/:id', goalCtrl.deleteGoal);
  app.put('/api/goals/:id', goalCtrl.updateGoal);
  app.get('/api/goals/getall/:id', goalCtrl.getUserGoals);

};
