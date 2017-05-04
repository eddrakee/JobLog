const company = require("../controllers/companyController.js")

module.exports = function(app){
  //
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
  //   }));

    app.get('/profile', isLoggedIn, function(req, res) {
      res.render('profile');
    });
    app.post('/company/add', company.post);
  } // end of module.exports

// Do we want to keep this here? - ED
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/')
    }
  }
