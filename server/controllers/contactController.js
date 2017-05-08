const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const Contact = mongoose.model("Contact");


function companyController(){
  var self = this;
  self.add = function(req, res){
    console.log(req.body);
  }
}

module.exports = new companyController();
