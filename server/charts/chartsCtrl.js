const Goal = require('../goal/Goal');

module.exports = {

  // Get the multi line chart
  getWeightChart(req, res, next) {

    // 
    // Goal.where('goalOwner').equals(req.params.userId)
    //   .exec((err, goals) => {
    // }

    res.render('test.ejs')
  }

}
