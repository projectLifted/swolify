const chartsCtrl = require('./chartsCtrl')

module.exports = app => {
  app.get('/api/chart', chartsCtrl.getChart);
}
