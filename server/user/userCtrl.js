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

  getUsers(req, res) {
    User.find({}, (err, users) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(users);
    });
  },

  updateUser(req, res) { // This method gets hung up and does not update
    User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser) => {
      if (err) {
        return res.status(500).json(err);
      }

      let user = req.body;

      req.login(user, function(error) {
          if (!error) {
             console.log('succcessfully updated user');
          }
      });

      return res.status(200).json(updatedUser);
    });
  },

  addUserPost(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      user.wallPosts.push(req.body);
      User.findByIdAndUpdate(req.params.id, user, (err, updatedUser) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(updatedUser);
      });
    });
  },

  deletePost(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      for (let i = 0; i < user.wallPosts.length; i++) {
        if ((user.wallPosts[i]._id).toString() === (req.params.postId).toString()) {
          user.wallPosts.splice(i, 1);
          user.save((err, updatedUser) => {
            if (err) {
              return res.status(500).json(err);
            }
            return res.status(200).json(updatedUser);
          })
        }
      }
    });
  }

};
