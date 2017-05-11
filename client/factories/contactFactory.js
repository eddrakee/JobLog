angular.module("app").factory("contactFactory", contactFactory);

function contactFactory($http){
  var factory = {};
  var db = {};

  factory.submit = (contact, cb) => {

    console.log(contact);

// Need to add the contact to the DB here
    $http.post("/contact/add", contact).then(function(returnedData){
      if(returnedData.data.success){
        cb(returnedData.data);
      }
    });
  }
  return factory;
}
