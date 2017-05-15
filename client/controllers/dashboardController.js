angular.module("app").controller("dashboardController", dashboardController);

function dashboardController($location, userFactory){
    let self = this;

    userFactory.getUser((user) => {
      self.user = user;
    });
}
