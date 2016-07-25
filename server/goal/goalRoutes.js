const goalCtrl = require('./goalCtrl');

module.exports = app => {
  app.post('/api/goals', goalCtrl.createGoal);
  app.get('/api/goals/:id', goalCtrl.findUserGoal);
  app.delete('/api/goals/:id', goalCtrl.deleteGoal);
  app.put('/api/goals/:id', goalCtrl.updateGoal);
};
