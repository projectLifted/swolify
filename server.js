const express = require('express')
const path = require('path')

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const masterRoutes = require('./server/masterRoutes');
const User = require('./server/user/User');
const port = 8080;

const app = express();
const mongoUri = `mongodb://${keys.mongoUser}:${keys.mongoPass}@ds027165.mlab.com:27165/swolify`;

mongoose.connect(mongoUri);
mongoose.connection.once('open', () => {
  console.log(`Connected to mongo at ${mongoUri}`);
});

masterRoutes(app);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: keys.fbClientID,
  clientSecret: keys.fbClientSecret,
  callbackURL: keys.fbCallbackURL,
}, (accessToken, refreshToken, profile, done) => {

    console.log(profile);
    return done();
    // User.findOne({facebookId: profile.id}, (err, user) => {
    //   if (!user) {
    //     new User({}).save( ( err, user ) => {
    //       return done(err, user);
    //     })
    //   }
    //   else {
    //
    //     return done(err, user);
    //   }
    // });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
})
