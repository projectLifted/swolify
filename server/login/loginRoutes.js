const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const loginCtrl = require('./loginCtrl');

module.exports = app => {

		app.get('/api/auth/facebook', passport.authenticate('facebook'));

    app.get( '/api/auth/facebook/callback',
    	passport.authenticate( 'facebook', {
    		successRedirect: '/sign-up',
    		failureRedirect: '/new-goal'
    }));

    app.get('/api/auth/facebook/logout', function(req, res){
      req.logout();
      res.redirect('/');
  });

		// app.get('/api/loggedin', function(req, res){
		// 	res.redirect('/');
		// })

    app.get('/api/auth/facebook/isauthed', loginCtrl.loggedIn);
}
