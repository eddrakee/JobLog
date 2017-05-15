angular.module("app").factory("companyFactory", companyFactory);

function companyFactory($http, userFactory){
  var factory = {};
  var db = {};
  let user;

  factory.submit = (companyName, location, phone, cb) => {
    let company = {
      companyName: companyName,
      location: location,
      phone: phone
    }

    userFactory.getUser((returnedUser)=>{
      user = returnedUser;
    });
// Need to add the company to the DB here
    $http.post("/company/add", {company, user}).then(function(returnedData){
      if(returnedData.data.success){
        cb(returnedData.data);
      }
    });
  }

  factory.getCompany = (companyId, cb) => {
      console.log(companyId);
      $http.get(`/company/${companyId}`).then(function(returnedData){
          if(returnedData.data.success){
              cb(returnedData.data);
          }
      });
  }
  return factory;
}
