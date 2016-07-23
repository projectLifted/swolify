const User = require('./User');

module.exports = {
  createUser(req, res) {
    new User(req.body).save((err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(201).json(user);
    });
  }
};
