const chartsCtrl = require('./chartsCtrl')

module.exports = app => {
  app.get('/api/weightchart/:userId', chartsCtrl.getWeightChart);
}
