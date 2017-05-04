angular.module("app").factory("companyFactory", companyFactory);

function companyFactory($http){
  var factory = {};
  var db = {};

  factory.submit = (companyName, location, phone, cb) => {
    let company = {
      companyName: companyName,
      location: location,
      phone: phone
    }

    console.log(company);

    $http.post("/company/add", company).then(function(returnedData){
      if(returnedData.data.success){
        cb(returnedData.data);
      }
    });
  }
  return factory;
}
