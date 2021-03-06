var users = require("../controllers/userController.js");
var jobs = require("../controllers/jobController.js");
var events = require("../controllers/eventController.js");
var contact = require("../controllers/contactController.js");
var company = require("../controllers/companyController.js");

module.exports = function(app){

//User
  app.post('/registration', users.create);
  app.post('/login', users.login)
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
    app.post('/company/add', company.addOne);
    app.get('/company/:id', company.getOne);

// Contact
    app.post('/contact/add', contact.addOne);

// Job
app.post('/jobs/add', function(req,res){
  jobs.addJob(req,res)
})
//Get All jobs
app.get('/jobs/all', function(req,res){
  jobs.allJobs(req,res)
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
