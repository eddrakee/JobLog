const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// const Company = mongoose.model("Company");


function companyController(){
  var self = this;
  self.add = function(req, res){
    console.log(req.body);
  }

  self.getCompany = function(req, res){
      console.log(req.params.id);
      let dummyCompany = {
          companyName : "Microsoft",
          location: "Redmond, WA",
          phone: "425-425-4254",
          about: "A huge Software company",
          linkedInConnection: "linkedInConnectionGoesHere",
          jobsApplied: "This Should be a reference to the jobs applied in the DB",
          contacts: "This should be a reference to the contacts in the DB"
      }
      res.json({success: true, dummyCompany});
  }
}

module.exports = new companyController();
