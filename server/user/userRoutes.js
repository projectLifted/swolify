const userCtrl = require('./userCtrl');

module.exports = app => {
  app.post('/api/users', userCtrl.createUser);
  app.get('/api/users/:id', userCtrl.retrieveUser);
  app.delete('/api/users/:id', userCtrl.deleteUser);
  app.put('/api/users/:id', userCtrl.updateUser);

  /* ADD LOGIN ROUTES */
};
