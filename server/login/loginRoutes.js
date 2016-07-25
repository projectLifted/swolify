const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const loginCtrl = require('./loginCtrl');

module.exports = app => {

		app.get('/api/auth/facebook', passport.authenticate('facebook'));

    app.get( '/api/auth/callback',
    	passport.authenticate( 'facebook', {
    		successRedirect: '/',
    		failureRedirect: '/'
    }));

    app.get('/api/auth/facebook/logout', function(req, res){
      req.logout();
      res.redirect('/');
  });

    app.get('/api/auth/facebook/isauthed', loginCtrl.loggedIn);
}
