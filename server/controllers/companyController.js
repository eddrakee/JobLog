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
