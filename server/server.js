const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const masterRoutes = require('./masterRoutes');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const facebookConfig = require('./config/facebookConfig');
const User = require('./user/User');

const app = express();
const port = 3000;
const mongoUri = 'mongodb://localhost:27017/swolify';

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../src`));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: '1406476072993162',
  clientSecret: 'a61291f1900f93286aab72990c1f713f',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({facebookId: profile.id}, (err, user) => {
      if (!user) {
        new User({}).save( ( err, user ) => {
          return done(err, user);
        })
      }
      else {

        return done(err, user);
      }
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
})

app.get('/auth/facebook',
  passport.authenticate('facebook', { scope: ['user_friends', 'email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/logout'
}));

app.get('/auth/facebook', (req, res) => {
  req.logout();
  console.log('Logged out user');
  res.redirect('logout');
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
  console.log(`Connected to mongo at ${mongoUri}`);
});


masterRoutes(app);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
