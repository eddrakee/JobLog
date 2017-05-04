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
    // Load Profile Page
    .when('/profile', {
        templateUrl: 'partials/profile.html'
    })
    // Load View All Jobs page
    .when('/jobs/all', {
        templateUrl: 'partials/allJobs.html'
    })
    .when('/company/add', {
      templateUrl: 'partials/addCompany.html',
      controller: 'companyController',
      controllerAs: 'CC'
    })
    .otherwise({
        redirectTo: '/'
    })
})
