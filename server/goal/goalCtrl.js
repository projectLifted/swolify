const Goal = require('./Goal');

module.exports = {
  createGoal(req, res) {
    new Goal(req.body).save((err, goal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json(goal);
    });
  },

  findUserGoal(req, res) {
    Goal.findById(req.params.id, (err, goal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(goal);
    });
  },

  deleteGoal(req, res) {
    Goal.findByIdAndRemove(req.params.id, (err, deletedGoal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(deletedGoal);
    });
  },

  updateGoal(req, res) {
    Goal.findByIdAndUpdate(req.params.id, req.body, (err, updatedGoal) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(updatedGoal);
    });
  }

};
