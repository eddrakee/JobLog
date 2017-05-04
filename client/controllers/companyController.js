angular.module("app").controller("companyController", companyController);

function companyController($location, companyFactory){
  var self = this;

  self.companyName;
  self.companyAdd;
  self.companyPhone;

  self.submit = () => {
    companyFactory.submit(self.companyName, self.companyAdd, self.companyPhone, function(returnedData){
      console.log(returnedData);
    });
  }
}
