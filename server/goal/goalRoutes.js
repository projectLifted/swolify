const goalCtrl = require('./goalCtrl');

module.exports = app => {
  app.post('/api/goals', goalCtrl.createGoal);
};
