const userCtrl = require('./userCtrl');

module.exports = app => {
  app.post('/api/users', userCtrl.createUser);
  app.get('/api/users/:id', userCtrl.retrieveUser);
  app.delete('/api/users/:id', userCtrl.deleteUser);
  app.put('/api/users/:id', userCtrl.updateUser);
  app.get('/api/users', userCtrl.getUsers);
  app.post('/api/user/:id', userCtrl.addUserPost);
  app.post('/api/user/following/:id', userCtrl.addUserFollowing);
  app.delete('/api/user/:id/wallpost/:postId', userCtrl.deletePost);
  app.get('/api/user/:id', userCtrl.getPreviouslyPostedGoal);
};
