const User = require('../models/User.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey = 'thisissecretkay';

module.exports.controller = (app) => {
    // register new user
    app.post('/users/register', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const gender = req.body.gender;

        const newUser = new User({
            name,
            email,
            password,
            gender
        });
        User.createUser(newUser, (error, user) => {
            if (error) { 
                res.status(422).json({
                    message: 'Something went wrong. Please try again later!'
                })
             }
            res.send({ user });
        });
    });

  // local strategy
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  }, (email, password, done) => {
    User.getUserByEmail(email, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      User.comparePassword(password, user.password, (error, isMatch) => {
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false);
      });
      return true;
    });
  }));

  // user login
  app.post('/users/login',
    passport.authenticate('local', { failureRedirect: '/users/login' }),
    (req, res) => {
      res.redirect('/');
    });

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}