const chartsCtrl = require('./chartsCtrl')

module.exports = app => {
  app.get('/api/testchart', chartsCtrl.getChart);
}
