const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Company = mongoose.model("Company");
const User = mongoose.model("User");


function companyController(){
  var self = this;
// we will always give find user the userid from the request
  findUser = (user) => {
    User.findOne(user, function(err, user){
      if(err) return false;
      else{
        return user;
      }
    });
  }

  // we should probably find everything by ID, rather than names
  findCompany = (company) => {
    // Does this findOne syntax work?
    Company.findOne(company._id, (err, foundCompany) => {
      if(err) return false;
      else{
        foundCompany.populate([{path: "contacts"}, {path: "jobsApplied"}]).exec((err, popCompany) => {
          if(err) return err;
          else return popCompany;
        });
      }
    });
  }

  self.getOne = function(req, res) {
    res.json(findCompany(req.body.company));
  }

  // need to always give the user id of the person making the request from the client
  self.addOne = function(req, res){
    // first we will find the user
    let user = findUser(req.body.user);
    if(!user) res.json({success: false, error: "User not found..."});
    // then we will see if the company already exists
    Company.findOne({name: req.body.company.companyName}, function(err, company){
      if(err) res.json(err);
      else if(company){
        // If the company already exists (for this user) we send a confirmation back to the user (client) with the old information, asking if they want to update it.

        // If they say yes we will hit another endpoint, which we should call UPDATE (to be restful).
        res.json(company);
      }
      // If there isn't already a company, we will create one.
      else{
        tempCompany._user = user;
        const tempCompany = new Company(req.body.company);
        // Saving the company
        tempCompany.save((err, newCompany)=>{
          if(err) res.json(err);
          else{
            // Updating and saving the user
            user.companies.push(newCompany._id);
            user.save((err, updatedUser)=>{
              if(err) res.json(err);
              // Send back a success and the new company
              else{
                res.json({succes: true, newCompany});
              }
            });
          }
        });
      }
    });
    console.log(req.body);
  }

  // Updating a company
  // Should we make the client check if he updated properties are different from the initial?  Example: Check the list of jobs to see if there is another job?  Would we only allow a single job/contact update per request?  Or are we allowing the addition/deletion of multiple jobs/contacts

  self.update = (req, res) => {
    let tempCompany = req.body.company;
    let user = findUser(req.body.user);
    if(!user) res.json({success: false, error: "User not found..."});

    let company = findCompany(tempCompany);
    if(!company) res.json({success: false, error: "Company not found..."});
    // Need to use a helper function for DRY
    // Trivial Updates:
    if(tempCompany.companyName) company.companyName = tempCompany.companyName;
    else if(tempCompany.location) company.location = tempCompany.location;
    else if(tempCompany.phone) company.phone = tempCompany.phone;
    else if(tempCompany.about) company.about = tempCompany.about;

    // Referential updates
    else if(tempCompany.linkedInConnection) company.linkedInConnection = tempCompany.linkedInConnect;

    // Since jobsApplied and contacts are references to other collections, we need to find and update the collections

    // What information would be supplied?

    // Adding a job only?
    // How would jobs be updated directly on the company?
    else if(tempCompany.jobsApplied) company.jobsApplied = tempCompany.jobsApplied;
    // Adding a contact only?
    // How would contacts be updated directly on the company?
    else if(tempCompany.contacts) company.contacts = tempCompany.contacts;

    company.save((err, updatedCompany) => {
      if(err) res.json(err);
      else res.json({succes: true, updatedCompany});
    });
  }
}

module.exports = new companyController();

// dont we want to attach users to companies? -> YES
// each user will have their own instance of companies
