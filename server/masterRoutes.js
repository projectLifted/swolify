const userRoutes = require('./user/userRoutes');
const goalRoutes = require('./goal/goalRoutes');

module.exports = app => {
  userRoutes(app);
  goalRoutes(app);
}
