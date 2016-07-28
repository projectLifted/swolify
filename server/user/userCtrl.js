const User = require('./User');

module.exports = {
  createUser(req, res) {
    new User(req.body).save((err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json(user);
    });
  },

  retrieveUser(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(user);
    });
  },

  deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, deletedUser) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(deletedUser);
    });
  },

  updateUser(req, res) { // This method gets hung up and does not update
    User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(updatedUser);
    });
  },
};
