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
      user.updated = new Date();
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

  updateUser(req, res, next) {
      User.findByIdAndUpdate(req.params.id, req.body, (err, response)=> {
        if(err) {
          return res.status(500).json(err)
          }

          let user = req.body;

          req.login(user, function(error) {

          return res.status(200).json(user)
          });

        });
      },

  addUserPost(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      user.wallPosts.push(req.body);
      user.save((err, updatedUser) => {
        if (err) {
          return res.status(500).json(err);
        }
        return res.status(200).json(updatedUser);
      })
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
  },

  getPreviouslyPostedGoal(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json(user.wallPosts[user.wallPosts.length - 1]);
    })
  },

  addToFollowing(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json(err);
      }
      user.following.push(req.body);
      user.save((err, updatedUser) => {
        if (err) {
          return res.status(500).json(err);
        }

        req.login(updatedUser, function(error) {

          })

        return res.status(200).json(updatedUser);
      });
    });
  },

  removeFollow(req, res) {
     User.findById(req.params.id, (err, user) => {
       if (err) {
         return res.status(500).json(err);
       }
       for (let i = 0; i < user.following.length; i++) {
         if ((user.following[i]).toString() === req.body._id) {
           user.following.splice(i, 1);
           user.save((err, updatedUser) => {
             if (err) {
               return res.status(500).json(err);
             }

             req.login(updatedUser, function(error) {

               })

             return res.status(200).json(updatedUser);
           })
         }
       }
     });
   }

};
