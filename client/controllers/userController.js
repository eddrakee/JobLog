angular.module("app").controller("userController", userController);

function userController($location, $scope, userFactory){
    let self = this;
    self.flag = false;
    self.message = "";
    self.register = () => {
        if(self.firstName && self.lastName && self.userName && self.email && self.password && self.passwordConfirm){
            self.flag = false;
            if (self.password != self.passwordConfirm) {
                self.flag = true;
                self.message = 'Passwords do not match';
                return;
            }
            let newUser = {
                firstName : self.firstName,
                lastName: self.lastName,
                userName: self.userName,
                email : self.email,
                password: self.password
            }
            userFactory.register(newUser, (returnedData) => {
                self.flag = true;
                if(returnedData.data.errmsg){
                    self.message = "Error in user Creation, please try again";
                }
                else{
                    self.message = `${returnedData.data.user.userName} account created, logging in...`;
                    setTimeout(()=>{
                        $scope.$apply(()=>{
                            $location.path('/dashboard');
                        });
                    }, 2000);
                }
            });
        }
        else{
            self.flag = true;
            self.message = "Required information missing"
        }
    }
    self.login = () => {
        console.log("calling login");
        let user = {
            userName: UC.userName,
            password: UC.password
        }
        userFactory.login(user, (returnedData) => {
            console.log(returnedData);
        });
    }
}






// King's Login Registration - DO NOT DELETE
// app.controller('userController', function($scope, $location, $http, userFactory){
//   $scope.registeredUser = {};
//   $scope.error = {};
//
//   userFactory.checkLogin(function(response){
//     console.log(response);
//     if(response.data){
//       $location.url('/dashboard');
//     }
//   });
//
//   $scope.createUser = function(newUser){
//     console.log('make this new user', newUser);
//     //call factory
//     userFactory.createUser(newUser, function(response){
//       console.log(response);
//     })
//     $scope.newUser = {};
//   }
//
//   $scope.loginUser = function(input){
//     console.log('trying to login user with', input);
//     //call factory
//     userFactory.loginUser(input, function(response){
//       console.log(response);
//       if(response.err){
//         console.log('there was an error!');
//         $scope.error.message = response.err;
//       } else {
//         console.log('no error, log them in');
//         $location.url('/dashboard');
//       }
//     })
//     $scope.userData = {};
//   }
// })
