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
    templateUrl: 'partials/login.html'
  })
  .when('/signup', {
    templateUrl: 'partials/signup.html'
  })
  // Load Profile Page
  .when('/profile', {
    templateUrl: 'partials/profile.html'
  })
  // Load View All Jobs page
  .when('/jobs/all', {
    templateUrl: 'partials/allJobs.html'
  })
  .when('/jobs/add', {
    templateUrl: 'partials/addJob.html'
  })
  .when('/company/add', {
    templateUrl: 'partials/addCompany.html',
    controller: 'companyController',
    controllerAs: 'CC'
  })
  .when('/company/', {
      templateUrl: 'partials/company.html',
      controller: 'viewCompanyController',
      controllerAs: 'VCC'
  })
  .when('/contact/add', {
      templateUrl: 'partials/addContact.html',
      controller: 'contactController',
      controllerAs: 'CC'
  })
  .otherwise({
    redirectTo: '/'
  })
})
