const User = require('../user/User');

module.exports = {
  loggedIn(req, res, next) {
      if (req.user) {
        return res.json(req.user);
      } else {
        return res.json(false);
      }
  },
  isAuthed(req, res, next) {
    if (req.isAuthenticated()) {
        next() }
      else {
        res.render('login'); }
  }
}
