<<<<<<< HEAD
var mongoose = require('mongoose');
var Company = mongoose.model('Company');

module.exports = (function(){
  return{
    //your code
  }
})();
=======
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// const Company = mongoose.model("Company");


function companyController(){
  var self = this;
  self.post = function(req, res){
    console.log(req.body);
  }
}

module.exports = new companyController();
>>>>>>> 4dc09115e28ed066b012e5fb73dd5b2b4b2fd95d
