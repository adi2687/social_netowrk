import express from 'express'
import user from '../models/user.js'
import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// Helper function for finding or creating a user
async function findOrCreate(condition, userData) {
  console.log('findOrCreate called with condition:', condition);
  console.log('findOrCreate document to create if not found:', userData);
  
  try {
    // First try to find the user
    const existingUser = await user.findOne(condition);
    
    if (existingUser) {
      console.log('User found in database:', existingUser);
      return existingUser;
    } else {
      // If user doesn't exist, create a new one
      console.log('User not found, creating new user with data:', userData);
      const newUser = await user.create(userData);
      console.log('New user created:', newUser);
      return newUser;
    }
  } catch (error) {
    console.error('Error in findOrCreate function:', error);
    throw error;
  }
}

const Router = express.Router()

const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// Facebook Authentication Strategy
passport.use('facebook', new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:5000/authentication/facebook/callback",
    profileFields: ['id', 'displayName', 'photos', 'email', 'gender', 'birthday', 'profileUrl']
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
      
      
      let email = null;
      if (profile.emails && profile.emails.length > 0) {
        email = profile.emails[0].value;
      } else if (profile._json && profile._json.email) {
        email = profile._json.email;
      } else {
        email = `${profile.id}@facebook.com`;
      }
      
      let profilePic = 'default-profile.jpg';
      if (profile.photos && profile.photos.length > 0) {
        profilePic = profile.photos[0].value;
        // profilePic = profilePic.replace('?sz=50', '').replace('?width=50&height=50', '');
      } else if (profile._json && profile._json.picture && profile._json.picture.data && profile._json.picture.data.url) {
        profilePic = profile._json.picture.data.url;
      }
      
      const userData = {
        facebookId: profile.id,
        username: profile.displayName || `user_${profile.id}`,
        email: email,
        profileImageurl: profilePic,
        password: null,
        createdAt: new Date()
      };
      
      console.log('User data to be saved:', userData);
      
      const foundUser = await findOrCreate({ facebookId: profile.id }, userData);
      console.log('User found or created:', foundUser);
      return cb(null, foundUser);
    } catch (err) {
      return cb(err);
    }
  }
));

// Google Authentication Strategy
passport.use('google', new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/authentication/google/callback",
    scope: ['profile', 'email']
  },
  async function(accessToken, refreshToken, profile, cb) {
    try {
      console.log('Google profile:', profile.id);
      
      // Extract user information from Google profile
      const userData = {
        googleId: profile.id,
        username: profile.displayName || `user_${profile.id}`,
        email: profile.emails?.[0]?.value || `${profile.id}@gmail.com`,
        profileImageurl: profile.photos?.[0]?.value || 'default-profile.jpg',
        password: null,
        createdAt: new Date()
      };
      
      console.log('User data to be saved:', userData);
      
      // Find or create user with Google ID
      const foundUser = await findOrCreate({ googleId: profile.id }, userData);
      console.log('User found or created:', foundUser);
      return cb(null, foundUser);
    } catch (err) {
      return cb(err);
    }
  }
));

Router.post("/login", async (req, res) => {
    console.log("here")
    res.send("this is the login page")
})

// Facebook authentication routes
Router.get('/facebook', (req, res, next) => {
  console.log('Facebook auth route accessed');
  next();
}, passport.authenticate('facebook', { scope: ['email', 'public_profile'] }))

// Facebook callback route
Router.get('/facebook/callback',
  (req, res, next) => {
    console.log('Facebook callback route accessed');
    next();
  },
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Authentication successful, user:', req.user);
    // Redirect to frontend after successful authentication
    res.redirect('http://localhost:5000/');
  }
)

// Google authentication routes
Router.get('/google', (req, res, next) => {
  console.log('Google auth route accessed');
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }))

// Google callback route
Router.get('/google/callback',
  (req, res, next) => {
    console.log('Google callback route accessed');
    next();
  },
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Authentication successful, user:', req.user);
    // Redirect to frontend after successful authentication
    res.redirect('http://localhost:5000/');
  }
)

// normal login routes
Router.post("/login", async (req, res) => {
    console.log("here")
    console.log(req.body)
    res.send("this is the login page")
})
export default Router