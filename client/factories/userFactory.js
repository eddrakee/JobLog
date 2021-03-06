angular.module("app").factory("userFactory", userFactory);

function userFactory($http){
    let factory = {};
    factory.user = {};

    factory.login = function(user, cb){
        console.log(`logging in with ${user}`);
        $http.post('/login', user).then((returnedData) =>{
            console.log(returnedData);
            if(!returnedData.data.success){
                cb(returnedData);
            }
            else{
                factory.user = returnedData.data.user;
                console.log(factory.user);
                cb(returnedData);
            }
        });
    }

    factory.register = function(newUser, cb){
        console.log('creating new user');
        $http.post('/registration', newUser).then((returnedData) => {
          if(!returnedData.data.succes){
            cb(returnedData);
          }
          else{
            factory.user = returnedData.data.user;
            cb(returnedData);
          }
        });

    }

    factory.getUser = (cb) => {
        cb(factory.user);
    }

return factory;

}

// King's Login Registration - DO NOT DELETE
// app.factory('userFactory', function($http, $window){
//   var user = {};
//   var error = {};
//   return{
//     createUser : function(newUser, callback){
//       console.log('factory trying to create the user', newUser);
//       $http.post('/users', newUser).then(function(response){
//         console.log(response);
//       })
//     },
//     loginUser: function(input, callback){
//       user = {};
//       error = {};
//       console.log('factory trying to log in with', input);
//       $http.post('/login', input).then(function(response){
//         console.log(response);
//         if(response.data.err){
//           console.log('error!');
//           error.message = response.data.err;
//           console.log(error);
//           callback(response.data);
//         } else {
//           user = response.data.data;
//           callback(response.data.data);
//         }
//       })
//     },
//     getUser: function(callback){
//       callback(user);
//     },
//     logoutUser: function(){
//       user = {};
//       $http.post('/logout').then(function(response){
//         console.log(response);
//       })
//     },
//
//     checkLogin: function(callback){
//       $http.get('/loggedin').then(function(response){
//         console.log(response);
//         if(response.data){
//           console.log('there is a user');
//           user = response.data;
//           callback(response);
//         } else {
//           console.log('no user!');
//           callback(response);
//         }
//       })
//     },
//
//     getAllUsers: function (callback){
//       $http.get('/getAllUsers').success(function(output){
//         console.log(output, 'output in user factory');
//         callback(output);
//       })
//     }
//   }
//   return factory;
// })
