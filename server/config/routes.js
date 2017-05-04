var users = require("../controllers/userController.js");
var jobs = require("../controllers/jobController.js");
var events = require("../controllers/eventController.js");
var contacts = require("../controllers/contactController.js");
var companies = require("../controllers/companyController.js");

module.exports = function(app){

//User
  app.post('/users',function(req,res) {
		users.create(req,res);
	});

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.post('/signup', passport.authenticate('local-signup', {
      successRedirect: '/profile',
      failureRedirect: '/signup',
      failureFlash: true
  }));

  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile');
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/')
    }
  }
}();
