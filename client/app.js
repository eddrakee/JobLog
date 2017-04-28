// FOLLOW THIS SYNTAX FOR ROUTING 
    // SHOW ONE -  /jobs/:id 
    //SHOW ALL - /jobs/all  
    //ADD JOB -  /jobs/add

var app = angular.module('app',['ngRoute'])
app.config(function($routeProvider){
    $routeProvider
     //ADD ROUTES HERE

    // Load Profile Page
    .when('/profile', {
        templateUrl: 'partials/profile.html'
    })
    // Load View All Jobs page
    .when('/jobs/all', { 
        templateUrl: 'partials/allJobs.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})