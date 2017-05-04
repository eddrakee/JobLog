var User = require('../models/userModel');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

  // serialize/deserialize User

  passport.use('local-signup', new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

  }, function(req, email, password, done) {

    process.nextTick(function() { // for async

      User.findOne({ 'local.email': email }, function(err, user) {
        if (err) { return done(err); }
        if (user) {
          return done(null, false, req.flash('signupMessage', 'That email already exists.'));
        } else {
          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = newUser.generateHash(password);
          newUser.save(function(err) {
            if (err) { throw err; }
            return done(null, newUser);
          });
        }
      });

    });

  }));

}
