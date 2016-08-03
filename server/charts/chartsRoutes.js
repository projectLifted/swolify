const chartsCtrl = require('./chartsCtrl')

module.exports = app => {
  app.get('/api/weightchart/:userId', chartsCtrl.getWeightChart);
  app.get('/api/cardiochart/:userId', chartsCtrl.getCardioChart);
  app.get('/api/bodyweightchart/:userId', chartsCtrl.getBodyWeightChart);
}
