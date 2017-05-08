angular.module("app").controller("viewCompanyController", viewCompanyController);

function viewCompanyController($location, companyFactory){
  var self = this;
  self.companyId = 1;

  function onLoad(companyId){
      companyFactory.getCompany(companyId, function(returnedData){
          console.log(returnedData);
      });
  }

  onLoad(self.companyId);

  self.companyName;
  self.companyLinkedInConnections;
  self.companyjobsAppliedTo;
  self.companyStats;
  self.companyLocation;
  self.companyCoreValues;
}
