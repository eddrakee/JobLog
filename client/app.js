// FOLLOW THIS SYNTAX FOR ROUTING
    // SHOW ONE -  /jobs/:id
    //SHOW ALL - /jobs/all
    //ADD JOB -  /jobs/add

var app = angular.module('app',['ngRoute'])
app.config(function($routeProvider){
  $routeProvider
   //ADD ROUTES HERE

  .when('/', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'userController',
    controllerAs: 'UC'
  })
  .when('/register', {
    templateUrl: 'partials/register.html',
    controller: 'userController',
    controllerAs: 'UC'
  })
  // Load Profile Page
  .when('/user/view', {
    templateUrl: 'partials/viewUser.html',
    controller: 'userController',
    controllerAs: 'UC'
  })
  // Load View All Jobs page
  .when('/jobs/all', {
    templateUrl: 'partials/allJobs.html',
    controller: 'jobsController',
    controllerAs: 'JC'
  })
  .when('/jobs/add', {
    templateUrl: 'partials/addJob.html',
    controller: 'addJobController',
    controllerAs: "AJC"
  })
  .when('/company/add', {
    templateUrl: 'partials/addCompany.html',
    controller: 'addCompanyController',
    controllerAs: 'ACC'
  })
  .when('/company/', {
      templateUrl: 'partials/company.html',
      controller: 'companyController',
      controllerAs: 'CC'
  })
  .when('/contact/add', {
      templateUrl: 'partials/addContact.html',
      controller: 'addContactController',
      controllerAs: 'CC'
  })
  .otherwise({
    redirectTo: '/'
  })
})
