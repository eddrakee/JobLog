var users = require("../controllers/userController.js");
var jobs = require("../controllers/jobController.js");
var events = require("../controllers/eventController.js");
var contact = require("../controllers/contactController.js");
var company = require("../controllers/companyController.js");

module.exports = function(app){

//User
  app.post('/users',function(req,res) {
		users.create(req,res);
	});

  // app.post('/login', passport.authenticate('local-login', {
  //   successRedirect: '/profile',
  //   failureRedirect: '/login',
  //   failureFlash: true
  // }));
  //
  // app.post('/signup', passport.authenticate('local-signup', {
  //     successRedirect: '/profile',
  //     failureRedirect: '/signup',
  //     failureFlash: true
  // }));

  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile');
  });
// Company
    app.post('/company/add', company.add);
    app.get('/company/:id', company.getCompany);

// Contact
    app.post('/contact/add', contact.add);

// Job
app.post('/jobs/add', function(req,res){
  jobs.addJob(req,res)
})
// Do we want to keep this here? - ED
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/')
    }
  }
}