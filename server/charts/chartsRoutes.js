const chartsCtrl = require('./chartsCtrl')

module.exports = app => {
  app.get('/api/weightchart', chartsCtrl.getWeightChart);
}
