angular.module("app").controller("companyController", companyController);

function companyController($location, companyFactory){
  var self = this;

  // self.companyName;
  // self.companyAdd;
  // self.companyPhone;

  self.addCompany = () => {
    console.log("CALLING ADD COMPANY");
    companyFactory.submit(self.companyName, self.companyAdd, self.companyPhone, function(returnedData){
      console.log(returnedData);
    });
  }
}
