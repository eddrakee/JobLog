var mongoose = require('mongoose');

var User = mongoose.model('User');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
module.exports = (function(){
  return{
    createUser: function(req, res){
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      console.log('in users controller');
      console.log(req.body);
      var user = new User({email: req.body.email, password: req.body.password});
      user.save(function(err){
        if(err){
          res.json({err: err});
        } else {
          res.json(true);
        }
      })
    },
    getAllUsers: function(req, res){
      User.find({}, function(err, results){
        if(err) {
         console.log(err);
        } else {
         res.json(results);
        }
      })
    }
  }
})();
