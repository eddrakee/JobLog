var mongoose = require('mongoose');
var User = mongoose.model('User');

// Temp (Dummy) User controller
function userController(){
  var self = this;
  self.users = [];

  self.login = function(req, res){
    // find if the username exists in the db
    User.findOne({name: req.body.user.userName}, function(err, user){
      if(err) res.json(err)
      // If we are returned a user, check if they have already logged in
      else if(user){
        login(user, res);
      }
      // If we aren't returned a user, we must create one in the DB and log them in.
      else{
        createUser(req.body.name, res);
      }
    });
  }

  self.create = function(req, res){
      console.log(req.body);
      createUser(req.body, res);
  }

  function createUser(props, res){
    const tempUser = new User(props);
    tempUser.save(function(err, newUser){
      if(err) res.json(err)
      else{
        self.users.push(newUser.userName);
        console.log(`${newUser.userName} account created and logged in!`);
        res.json({user: newUser, success: true, message: `${newUser.userName} account created and logged in!`});
      }
    });
  }

  function login(user, res){
    if(self.users.includes(user.userName)){
      console.log("found user, already logged in!");
      res.json({message: "User Already Logged In", kind: "Login Error"});
    }
    else{
      self.users.push(user.userName);
      console.log(`${user.userName} logged in!`);
      res.json({user, success: true, message: `${user.userName} logged in!`});
    }
  }
}

module.exports = new userController();

// DO NOT DELETE
// King's Section - Pending

// var bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(10);
// module.exports = (function(){
//   return{
//     createUser: function(req, res){
//       req.body.password = bcrypt.hashSync(req.body.password, salt);
//       console.log('in users controller');
//       console.log(req.body);
//       var user = new User({email: req.body.email, password: req.body.password});
//       user.save(function(err){
//         if(err){
//           res.json({err: err});
//         } else {
//           res.json(true);
//         }
//       })
//     },
//     getAllUsers: function(req, res){
//       User.find({}, function(err, results){
//         if(err) {
//          console.log(err);
//         } else {
//          res.json(results);
//         }
//       })
//     }
//   }
// })();
