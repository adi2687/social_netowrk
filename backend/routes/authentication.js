import express from 'express'
import user from '../models/user.js'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'

const Router = express.Router()

// Facebook App credentials - should be moved to environment variables in production
const FACEBOOK_APP_ID = 'your_facebook_app_id'
const FACEBOOK_APP_SECRET = 'your_facebook_app_secret'

// Configure Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    user.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

Router.post("/login", async (req, res) => {
    console.log("here")
    res.send("this is the login page")
})

// Facebook authentication routes
Router.get('/facebook', passport.authenticate('facebook'))

// Facebook callback route
Router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
)
export default Router