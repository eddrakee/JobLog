angular.module("app").controller("addContactController", addContactController);

function addContactController($location, contactFactory){
  var self = this;

  self.firstName;
  self.lastName;
  self.recruiter;
  self.favorite;
  self.company;
  // Still need to figure out jobs
  // self.jobs;
  self.email;
  self.phone;
  self.notes;

  self.submit = () => {
      let contact = {
          firstName: self.firstName,
          lastName: self.lastName,
          recruiter: self.recruiter,
          favorite: self.favorite,
          company: self.company,
          email: self.email,
          phone: self.phone,
          notes: self.notes
      }
      contactFactory.submit(contact, function(returnedData){
          console.log(returnedData);
      });
  }
}
