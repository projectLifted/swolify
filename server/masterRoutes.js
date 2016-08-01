const userRoutes = require('./user/userRoutes');
const goalRoutes = require('./goal/goalRoutes');
const loginRoutes = require('./login/loginRoutes');
const chartsRoutes = require('./charts/chartsRoutes');


module.exports = app => {
  userRoutes(app);
  goalRoutes(app);
  loginRoutes(app);
  chartsRoutes(app);
}
