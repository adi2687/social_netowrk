import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import user from "../models/user.js";

const app = express();
const databaseconnection=process.env.MONGO_URL ;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Session configuration
app.use(session({
  secret: 'social_network_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } 
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport serialize/deserialize for debugging
passport.serializeUser(function(user, done) {
  console.log('Serializing user:', user);
  done(null, user._id);
});

passport.deserializeUser(async function(id, done) {
  console.log('Deserializing user id:', id);
  try {
    const foundUser = await user.findById(id);
    console.log('Deserialized user:', foundUser);
    done(null, foundUser);
  } catch (err) {
    console.error('Error deserializing user:', err);
    done(err);
  }
});

// Routes are here
import authRoutes from "../routes/authentication.js";
// Routes are here

// Database connection done
import connect from "../database/connection.js";
connect(databaseconnection);
// database conneection closed

// Main authentication routes
app.use("/authentication", authRoutes);

// Add compatibility route for /auth to handle Facebook's callback
app.use("/auth", (req, res, next) => {
  console.log(`Redirecting ${req.method} ${req.url} to /authentication${req.url}`);
  req.url = `/authentication${req.url}`;
  app._router.handle(req, res, next);
});
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("this is the home page");
});
app.listen(PORT, () => {
  console.log(`server listeneing at ${PORT}`);
});
