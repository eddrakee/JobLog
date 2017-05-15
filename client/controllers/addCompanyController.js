angular.module("app").controller("addCompanyController", addCompanyController);

function addCompanyController($location, companyFactory){
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
